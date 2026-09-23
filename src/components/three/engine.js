import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const pointer = { x: 0, y: 0 };
let pointerBound = false;

function bindPointer() {
  if (pointerBound) return;
  pointerBound = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true }
  );
}

export const damp = (current, target, lambda, dt) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

export function createStage(container, build, { fov = 40, z = 6.5 } = {}) {
  bindPointer();

  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
  container.appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new PerspectiveCamera(fov, 1, 0.1, 100);
  camera.position.z = z;

  const world = build({ scene, camera, small: container.clientWidth < 420 });

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let onScreen = true;

  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    elapsed += dt;
    world.update(elapsed, dt, pointer);
    renderer.render(scene, camera);
  };
  const start = () => {
    if (raf || !onScreen || document.hidden) return;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  const visibility = new IntersectionObserver(
    ([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    },
    { rootMargin: "80px" }
  );
  visibility.observe(container);

  const onTabChange = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", onTabChange);

  world.update(0, 0, pointer);
  renderer.render(scene, camera);
  start();

  return () => {
    stop();
    visibility.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", onTabChange);
    scene.traverse((obj) => {
      obj.geometry?.dispose();
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      materials.forEach((m) => m?.dispose());
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}
