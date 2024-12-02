import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SceneInit = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(50);

    // Add stars
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.2, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        emissive: true,
        emissiveIntensity: 1, 
      
      });

      const star = new THREE.Mesh(geometry, material);

      star.material.color.setHSL(0.9, 1, 0.5);

      // Position stars randomly in 3D space
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(400));

      star.position.set(x, y, z);
      scene.add(star);

      return star;
    }

    const stars = Array(5000).fill().map(addStar);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // OrbitControls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);

    // Scroll event listener for zoom effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.z = 50 - scrollY * 0.05;
    };

    window.addEventListener("scroll", handleScroll);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Slowly move stars
      stars.forEach((star) => {
        star.position.z += 0.03;
        if (star.position.z > 50) {
          star.position.z = -100;
        }

        // Make stars blink with changing colors
        const hue = (Date.now() * 0.0001 + star.position.x) % 1;
        star.material.color.setHSL(hue, 1, 0.5);
        star.material.opacity =
          Math.sin(Date.now() * 0.005 + star.position.y) * 0.5 + 0.5;
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
