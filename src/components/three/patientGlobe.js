import {
  AdditiveBlending,
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  Points,
  PointsMaterial,
  QuadraticBezierCurve3,
  RingGeometry,
  SphereGeometry,
  Vector3,
} from "three";
import { damp } from "./engine";

export const camera = { fov: 40, z: 6.9 };

const R = 1.6;
const LIME = 0xa7cf3b;
const INK = 0x1b1b17;

// [latitude, longitude] of the channels feeding the clinic hub
const CHANNELS = [
  [32, -48],
  [-18, -62],
  [44, 18],
  [-34, 22],
  [12, 58],
];
const HUB = [4, -4];

function toVector([lat, lon], radius = R) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function fibonacciSphere(count) {
  const positions = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    positions[i * 3] = Math.cos(theta) * r * R;
    positions[i * 3 + 1] = y * R;
    positions[i * 3 + 2] = Math.sin(theta) * r * R;
  }
  return positions;
}

export default function buildPatientGlobe({ scene, small }) {
  const root = new Group();
  root.rotation.set(0.35, -0.6, 0);
  scene.add(root);

  const dotGeometry = new BufferGeometry();
  dotGeometry.setAttribute("position", new Float32BufferAttribute(fibonacciSphere(small ? 900 : 1600), 3));
  root.add(
    new Points(
      dotGeometry,
      new PointsMaterial({
        color: LIME,
        size: small ? 0.038 : 0.032,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
      })
    )
  );

  // Opaque core in the section's background colour hides the far side of the dot shell.
  root.add(new Mesh(new SphereGeometry(R * 0.985, 48, 48), new MeshBasicMaterial({ color: INK })));

  const hub = toVector(HUB);
  const nodeGeometry = new SphereGeometry(1, 16, 16);
  const hubMesh = new Mesh(nodeGeometry, new MeshBasicMaterial({ color: 0xffffff }));
  hubMesh.position.copy(hub);
  hubMesh.scale.setScalar(0.07);
  root.add(hubMesh);

  const halo = new Mesh(
    new RingGeometry(0.09, 0.11, 40),
    new MeshBasicMaterial({ color: LIME, transparent: true, side: DoubleSide, depthWrite: false })
  );
  halo.position.copy(hub);
  halo.lookAt(hub.clone().multiplyScalar(2));
  root.add(halo);

  const pulseMaterial = new MeshBasicMaterial({ color: LIME, blending: AdditiveBlending, transparent: true });
  const flows = CHANNELS.map((coords, i) => {
    const start = toVector(coords);
    const node = new Mesh(nodeGeometry, new MeshBasicMaterial({ color: LIME }));
    node.position.copy(start);
    node.scale.setScalar(0.045);
    root.add(node);

    const lift = R * (1.3 + start.distanceTo(hub) * 0.12);
    const mid = start.clone().add(hub).multiplyScalar(0.5).normalize().multiplyScalar(lift);
    const curve = new QuadraticBezierCurve3(start, mid, hub);
    root.add(
      new Line(
        new BufferGeometry().setFromPoints(curve.getPoints(64)),
        new LineBasicMaterial({ color: LIME, transparent: true, opacity: 0.35 })
      )
    );

    const pulse = new Mesh(nodeGeometry, pulseMaterial);
    pulse.scale.setScalar(0.035);
    root.add(pulse);
    return { curve, pulse, offset: i / CHANNELS.length };
  });

  return {
    update(t, dt, pointer) {
      root.rotation.y += dt * 0.08;
      root.rotation.x = damp(root.rotation.x, 0.35 - pointer.y * 0.2, 2, dt);
      root.rotation.z = damp(root.rotation.z, pointer.x * 0.08, 2, dt);

      flows.forEach(({ curve, pulse, offset }) => {
        pulse.position.copy(curve.getPoint((t * 0.22 + offset) % 1));
      });

      const beat = (t * 0.6) % 1;
      halo.scale.setScalar(1 + beat * 1.8);
      halo.material.opacity = 0.9 * (1 - beat);
    },
  };
}
