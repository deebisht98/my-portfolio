import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

type SceneProps = {
  scrollY: number;
};

export default function Scene({ scrollY }: SceneProps) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // Camera animation based on scrollA
  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(camera.position, {
      z: 5 - scrollY * 0.01,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(groupRef.current.rotation, {
      y: scrollY * 0.002,
      duration: 1,
      ease: "power1.out",
    });
  }, [scrollY, camera]);

  // Frame-by-frame animation
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Subtle floating animation
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" intensity={1} />

      <group ref={groupRef}>
        {/* Your 3D objects will go here */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#5686F5"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={Math.random() > 0.5 ? "#61DAFB" : "#5686F5"}
              emissive={Math.random() > 0.5 ? "#61DAFB" : "#5686F5"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}
