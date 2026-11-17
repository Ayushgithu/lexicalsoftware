"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function TechCardCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Geometry: Icosahedron Wireframe + Glow Particles
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    
    // Wireframe Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b35, // Lexical Orange Accent
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphereMesh = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(sphereMesh);

    // Node Points (Vertices)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xff9f76,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const pointsMesh = new THREE.Points(geometry, pointsMaterial);
    scene.add(pointsMesh);

    // Mouse Tracking for Smooth Parallax
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.5;
      targetY = (y / rect.height) * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous rotation
      sphereMesh.rotation.y += 0.003;
      sphereMesh.rotation.x += 0.001;
      pointsMesh.rotation.y += 0.003;
      pointsMesh.rotation.x += 0.001;

      // Smooth mouse follow (Easing)
      sphereMesh.rotation.y += (targetX - sphereMesh.rotation.y) * 0.05;
      sphereMesh.rotation.x += (-targetY - sphereMesh.rotation.x) * 0.05;
      pointsMesh.rotation.y += (targetX - pointsMesh.rotation.y) * 0.05;
      pointsMesh.rotation.x += (-targetY - pointsMesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100"
    />
  );
}