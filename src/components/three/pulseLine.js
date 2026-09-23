import {
  AdditiveBlending,
  BufferGeometry,
  CatmullRomCurve3,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  TubeGeometry,
  Vector3,
} from "three";
import { damp } from "./engine";

export const camera = { fov: 42, z: 8.4 };

const LIME = 0xa7cf3b;
const CREAM = 0xf6f5ef;

const SPAN = 7.6; // half-width of the trace
const BEATS = 3;

// One PQRST beat, as an offset from the baseline. `u` runs 0 → 1 across a beat.
function beat(u) {
  const spike = (centre, width, height) => height * Math.exp(-(((u - centre) / width) ** 2));
  return (
    spike(0.2, 0.05, 0.22) + // P
    spike(0.42, 0.016, -0.3) + // Q
    spike(0.47, 0.018, 1.5) + // R
    spike(0.53, 0.02, -0.45) + // S
    spike(0.72, 0.07, 0.4) // T
  );
}

function tracePoints(count) {
  const points = [];
  for (let i = 0; i <= count; i++) {
    const p = i / count;
    const x = -SPAN + p * SPAN * 2;
    const y = beat((p * BEATS) % 1);
    points.push(new Vector3(x, y, 0));
  }
  return points;
}

// Faint chart paper behind the trace, the way a monitor prints it.
function chartGrid(step, halfW, halfH) {
  const positions = [];
  for (let x = -halfW; x <= halfW + 0.001; x += step) {
    positions.push(x, -halfH, 0, x, halfH, 0);
  }
  for (let y = -halfH; y <= halfH + 0.001; y += step) {
    positions.push(-halfW, y, 0, halfW, y, 0);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  return geometry;
}

export default function buildPulseLine({ scene, small }) {
  const root = new Group();
  root.rotation.set(0.12, -0.3, 0);
  scene.add(root);

  const grid = new LineSegments(
    chartGrid(0.62, SPAN, 2.4),
    new LineBasicMaterial({ color: CREAM, transparent: true, opacity: 0.05 })
  );
  root.add(grid);

  const curve = new CatmullRomCurve3(tracePoints(small ? 260 : 520));
  const trace = new Mesh(
    new TubeGeometry(curve, small ? 300 : 600, 0.028, small ? 5 : 8, false),
    new MeshBasicMaterial({ color: LIME, transparent: true, opacity: 0.75 })
  );
  root.add(trace);

  // The reading head that runs along the trace, with a soft halo.
  const head = new Mesh(
    new SphereGeometry(0.09, small ? 8 : 16, small ? 8 : 16),
    new MeshBasicMaterial({ color: CREAM })
  );
  const halo = new Mesh(
    new SphereGeometry(0.26, small ? 8 : 16, small ? 8 : 16),
    new MeshBasicMaterial({
      color: LIME,
      transparent: true,
      opacity: 0.3,
      blending: AdditiveBlending,
      depthWrite: false,
    })
  );
  head.add(halo);
  root.add(head);

  const point = new Vector3();

  return {
    update(t, dt, pointer) {
      root.rotation.y = damp(root.rotation.y, -0.3 + pointer.x * 0.22, 2, dt);
      root.rotation.x = damp(root.rotation.x, 0.12 - pointer.y * 0.14, 2, dt);
      root.position.y = Math.sin(t * 0.45) * 0.1;

      // Sweep left to right, then start over — one pass every eight seconds.
      const progress = (t % 8) / 8;
      curve.getPointAt(progress, point);
      head.position.copy(point);

      const pulse = 1 + Math.sin(t * 6) * 0.12;
      halo.scale.setScalar(pulse);
    },
  };
}
