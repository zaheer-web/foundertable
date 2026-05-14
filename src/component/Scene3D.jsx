import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Premium 3D Background Scene
 * - Rotating gold wireframe icosahedron (centerpiece)
 * - Gold particle sphere field
 * - Slowly rotating torus rings
 * - Mouse parallax + depth fog
 */
export default function Scene3D() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Gold palette
    const GOLD = new THREE.Color("#D6B06A");
    const DEEP_GOLD = new THREE.Color("#A37C34");

    // ---- Central Wireframe Icosahedron ----
    const icoGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: GOLD,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Inner solid glow core
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: DEEP_GOLD,
      transparent: true,
      opacity: 0.12,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ---- Torus Rings ----
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(4.2, 0.012, 16, 200),
      new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.6 })
    );
    ring1.rotation.x = Math.PI / 2.3;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(5.4, 0.008, 16, 200),
      new THREE.MeshBasicMaterial({ color: DEEP_GOLD, transparent: true, opacity: 0.4 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(6.8, 0.006, 16, 200),
      new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.25 })
    );
    ring3.rotation.x = Math.PI / 1.8;
    scene.add(ring3);

    // ---- Particle Field (sphere distribution) ----
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 9 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const t = Math.random();
      const c = GOLD.clone().lerp(DEEP_GOLD, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Floating Small Geometric Shapes ----
    const floaters = [];
    const floaterGeos = [
      new THREE.TetrahedronGeometry(0.35),
      new THREE.OctahedronGeometry(0.3),
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
    ];
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(
        floaterGeos[i % floaterGeos.length],
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? GOLD : DEEP_GOLD,
          wireframe: true,
          transparent: true,
          opacity: 0.5,
        })
      );
      m.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      m.userData.speed = 0.3 + Math.random() * 0.7;
      m.userData.offset = Math.random() * Math.PI * 2;
      scene.add(m);
      floaters.push(m);
    }

    // ---- Mouse parallax ----
    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove);

    // ---- Resize ----
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ---- Animate ----
    const clock = new THREE.Clock();
    let frameId;
    const animate = () => {
      const t = clock.getElapsedTime();

      ico.rotation.x = t * 0.15;
      ico.rotation.y = t * 0.2;
      core.rotation.x = -t * 0.1;
      core.rotation.y = -t * 0.18;

      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.05;
      ring3.rotation.z = t * 0.03;

      particles.rotation.y = t * 0.04;
      particles.rotation.x = t * 0.015;

      floaters.forEach((f) => {
        f.rotation.x = t * f.userData.speed;
        f.rotation.y = t * f.userData.speed * 0.7;
        f.position.y += Math.sin(t * 0.8 + f.userData.offset) * 0.003;
      });

      // camera parallax
      camera.position.x += (mouseRef.current.x * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (mouseRef.current.y * 0.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ring1.geometry.dispose();
      ring1.material.dispose();
      ring2.geometry.dispose();
      ring2.material.dispose();
      ring3.geometry.dispose();
      ring3.material.dispose();
      floaters.forEach((f) => {
        f.geometry.dispose();
        f.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}