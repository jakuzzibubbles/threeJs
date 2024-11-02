import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// Function to add stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);

  return star;
}

// Add multiple stars
const stars = Array(200).fill().map(addStar);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Animation loop to make stars blink and change colors
function animate() {
  requestAnimationFrame(animate);

  stars.forEach((star) => {
    star.material.color.setHSL(
      Math.sin(Date.now() * 0.001 + star.position.x) * 0.5 + 0.5,
      1,
      0.5
    );
    star.material.opacity =
      Math.sin(Date.now() * 0.001 + star.position.y) * 0.5 + 0.5;
  });

  controls.update();
  renderer.render(scene, camera);
}

animate();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
