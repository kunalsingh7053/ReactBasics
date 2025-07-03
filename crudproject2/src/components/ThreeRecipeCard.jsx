import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeRecipePlate = () => {
  const mountRef = useRef(null);
  const plateRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Load recipe texture (you can change this image)
    const loader = new THREE.TextureLoader();
    loader.load(
      "https://plus.unsplash.com/premium_photo-1733259709671-9dbf22bf02cc?q=80&w=2080&auto=format&fit=crop",
      (texture) => {
        const geometry = new THREE.CircleGeometry(2, 64); // Plate shape
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.5,
          metalness: 0.2,
        });

        const plate = new THREE.Mesh(geometry, material);
        plate.rotation.x = -Math.PI / 3.5; // tilt toward viewer
        scene.add(plate);
        plateRef.current = plate;

        // Animate on mouse move
        const handleMouseMove = (e) => {
          const { left, top, width, height } =
            mountRef.current.getBoundingClientRect();
          const x = (e.clientX - left) / width;
          const y = (e.clientY - top) / height;
          const rotX = (y - 0.5) * 0.3;
          const rotY = (x - 0.5) * 0.6;

          plate.rotation.x = -Math.PI / 3.5 + rotX;
          plate.rotation.z = rotY;
        };
        mountRef.current.addEventListener("mousemove", handleMouseMove);

        // Loop
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
          mountRef.current.removeEventListener("mousemove", handleMouseMove);
          mountRef.current.removeChild(renderer.domElement);
        };
      }
    );
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full max-w-[500px] h-[400px] mx-auto my-10 cursor-pointer"
    />
  );
};

export default ThreeRecipePlate;
