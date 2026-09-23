import {
  AmbientLight,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PointLight,
  SphereGeometry,
  TorusGeometry,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { damp } from "./engine";

export const camera = { fov: 38, z: 7.2 };

const LIME = 0xa7cf3b;
const INK = 0x1b1b17;
const WHITE = 0xffffff;

const ORBITERS = [
  { radius: 2.35, speed: 0.45, phase: 0, size: 0.16, color: WHITE, tilt: 0.35 },
  { radius: 2.35, speed: 0.45, phase: Math.PI, size: 0.12, color: INK, tilt: 0.35 },
  { radius: 2.8, speed: -0.3, phase: 1.4, size: 0.1, color: LIME, tilt: -0.5 },
  { radius: 2.8, speed: -0.3, phase: 4.5, size: 0.14, color: WHITE, tilt: -0.5 },
];

export default function buildHealthCross({ scene, small }) {
  scene.add(new AmbientLight(WHITE, 0.9));
  const key = new DirectionalLight(WHITE, 2.6);
  key.position.set(4, 5, 6);
  scene.add(key);
  const fill = new PointLight(WHITE, 25, 0, 2);
  fill.position.set(-4, -2, 3);
  scene.add(fill);

  const root = new Group();
  scene.add(root);

  const crossMaterial = new MeshPhysicalMaterial({
    color: LIME,
    roughness: 0.18,
    metalness: 0.05,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
  });
  const segments = small ? 4 : 8;
  const cross = new Group();
  cross.add(new Mesh(new RoundedBoxGeometry(0.95, 2.7, 0.95, segments, 0.3), crossMaterial));
  cross.add(new Mesh(new RoundedBoxGeometry(2.7, 0.95, 0.95, segments, 0.3), crossMaterial));
  cross.rotation.set(0.35, -0.5, 0.12);
  root.add(cross);

  const ringMaterial = new MeshBasicMaterial({ color: INK, transparent: true, opacity: 0.25 });
  const pivots = [0.35, -0.5].map((tilt, i) => {
    const pivot = new Group();
    pivot.rotation.set(1.2 + tilt, tilt, 0);
    pivot.add(new Mesh(new TorusGeometry(i ? 2.8 : 2.35, 0.01, 8, 200), ringMaterial));
    root.add(pivot);
    return pivot;
  });

  const orbGeometry = new SphereGeometry(1, 24, 24);
  const orbiters = ORBITERS.map((o) => {
    const mesh = new Mesh(orbGeometry, new MeshStandardMaterial({ color: o.color, roughness: 0.3 }));
    mesh.scale.setScalar(o.size);
    pivots[o.tilt > 0 ? 0 : 1].add(mesh);
    return { ...o, mesh };
  });

  return {
    update(t, dt, pointer) {
      cross.rotation.y += dt * 0.35;
      root.rotation.y = damp(root.rotation.y, pointer.x * 0.45, 2.5, dt);
      root.rotation.x = damp(root.rotation.x, -pointer.y * 0.3, 2.5, dt);
      root.position.y = Math.sin(t * 0.9) * 0.12;
      orbiters.forEach(({ mesh, radius, speed, phase }) => {
        const a = phase + t * speed;
        mesh.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      });
    },
  };
}
