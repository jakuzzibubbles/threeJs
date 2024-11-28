import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SceneInit = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
      alpha: true, // Enable transparency
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Add stars
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        transparent: true, // Enable transparency
        opacity: Math.random(), // Random initial opacity
      });

      const star = new THREE.Mesh(geometry, material);

      // Randomize initial star color with a vibrant hue
      const hue = Math.random(); // Random hue (0-1)
      star.material.color.setHSL(hue, 1, 0.5); // Hue-Saturation-Lightness

      // Position stars randomly in 3D space
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);

      return star;
    }

    const stars = Array(200).fill().map(addStar); // Add multiple stars

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // OrbitControls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop for moving and color-changing stars
    function animate() {
      requestAnimationFrame(animate);

      // Slowly move stars
      stars.forEach((star) => {
        // Slow movement
        star.position.z += 0.01; // Move stars slightly forward
        if (star.position.z > 50) {
          star.position.z = -50; // Reset position when too far forward
        }

        // Make stars blink with changing colors
        const hue = (Date.now() * 0.0001 + star.position.x) % 1; // Dynamic hue
        star.material.color.setHSL(hue, 1, 0.5); // Update color
        star.material.opacity =
          Math.sin(Date.now() * 0.002 + star.position.y) * 0.5 + 0.5; // Blinking effect
      });

      // Smooth camera and controls updates
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Clean up on component unmount
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      id="bg"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
};

export default SceneInit;
