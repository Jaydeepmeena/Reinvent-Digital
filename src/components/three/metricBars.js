import {
  AmbientLight,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PointLight,
  TorusGeometry,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { damp } from "./engine";

export const camera = { fov: 38, z: 7.6 };

const LIME = 0xa7cf3b;
const CREAM = 0xf6f5ef;
const INK = 0x2a2a24;

// A rising set of bars — the last one, the booked patient, is the lime one.
const BARS = [
  { x: -1.8, height: 1.0, color: INK, lift: 0.0 },
  { x: -0.6, height: 1.6, color: CREAM, lift: 0.18 },
  { x: 0.6, height: 2.3, color: CREAM, lift: 0.36 },
  { x: 1.8, height: 3.1, color: LIME, lift: 0.54 },
];

const BASE = -1.6;

export default function buildMetricBars({ scene, small }) {
  scene.add(new AmbientLight(CREAM, 0.85));
  const key = new DirectionalLight(CREAM, 2.4);
  key.position.set(4, 6, 5);
  scene.add(key);
  const fill = new PointLight(LIME, 18, 0, 2);
  fill.position.set(-3, -2, 4);
  scene.add(fill);

  const root = new Group();
  scene.add(root);

  const segments = small ? 2 : 4;
  const bars = BARS.map(({ x, height, color, lift }) => {
    const mesh = new Mesh(
      new RoundedBoxGeometry(0.78, height, 0.78, segments, 0.16),
      new MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.05 })
    );
    mesh.position.set(x, BASE + height / 2, 0);
    root.add(mesh);
    return { mesh, baseY: BASE + height / 2, lift };
  });

  // A thin ring around the base, echoing the rings used elsewhere on the site.
  const ring = new Mesh(
    new TorusGeometry(3.1, 0.012, 8, small ? 80 : 160),
    new MeshBasicMaterial({ color: LIME, transparent: true, opacity: 0.45 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = BASE;
  root.add(ring);

  return {
    update(t, dt, pointer) {
      root.rotation.y += dt * 0.28;
      root.rotation.x = damp(root.rotation.x, -pointer.y * 0.22 + 0.12, 2.4, dt);
      root.position.y = Math.sin(t * 0.8) * 0.1;
      // Each bar breathes a little, offset from the next.
      bars.forEach(({ mesh, baseY, lift }, i) => {
        mesh.position.y = baseY + Math.sin(t * 1.1 + i * 0.7) * 0.06 * (1 + lift);
      });
      ring.rotation.z += dt * 0.12;
    },
  };
}
