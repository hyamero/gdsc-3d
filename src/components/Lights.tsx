import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Lights = () => {
  const leftLightGroup = useRef<THREE.Group>(null);
  const rightLightGroup = useRef<THREE.Group>(null);
  const frontSpotlight = useRef<THREE.SpotLight>(null);

  useFrame(({ pointer }) => {
    const leftGroup = leftLightGroup.current;
    const rightGroup = rightLightGroup.current;
    const spotlight = frontSpotlight.current;

    if (leftGroup && rightGroup && spotlight) {
      const lerpX = THREE.MathUtils.lerp;

      const rotationY = pointer.x * (Math.PI / 2);
      leftGroup.rotation.y = lerpX(leftGroup.rotation.y, -rotationY, 0.1);
      rightGroup.rotation.y = lerpX(rightGroup.rotation.y, rotationY, 0.1);

      spotlight.position.set(
        lerpX(spotlight.position.x, -0.5 + pointer.x * 7, 0.07),
        lerpX(spotlight.position.y, 4 + pointer.y * 4, 0.07),
        spotlight.position.z
      );
    }
  });

  return (
    <>
      <group ref={leftLightGroup}>
        <pointLight position={[0, 4, 5]} distance={2} intensity={120} />
      </group>
      <group ref={rightLightGroup}>
        <pointLight position={[0, 4, 8]} distance={2} intensity={120} />
      </group>
      <spotLight
        castShadow
        ref={frontSpotlight}
        penumbra={1}
        angle={Math.PI / 4}
        position={[0, 0, 4]}
        distance={10}
        intensity={120}
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
};
