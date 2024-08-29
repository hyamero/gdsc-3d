import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Lights = () => {
  const groupL = useRef(null);
  const groupR = useRef(null);
  const front = useRef(null);

  useFrame(({ pointer }) => {
    if (!groupL.current || !groupR.current || !front.current) return;

    (groupR.current as THREE.Mesh).rotation.y = THREE.MathUtils.lerp(
      (groupR.current as THREE.Mesh).rotation.y,
      -pointer.x * (Math.PI / 2),
      0.1
    );
    (groupL.current as THREE.Mesh).rotation.y = THREE.MathUtils.lerp(
      (groupL.current as THREE.Mesh).rotation.y,
      pointer.x * (Math.PI / 2),
      0.1
    );
    (front.current as THREE.Mesh).position.x = THREE.MathUtils.lerp(
      (front.current as THREE.Mesh).position.x,
      -0.5 + pointer.x * 7,
      0.07
    );
    (front.current as THREE.Mesh).position.y = THREE.MathUtils.lerp(
      (front.current as THREE.Mesh).position.y,
      4 + pointer.y * 4,
      0.07
    );
  });

  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 4, 5]} distance={2} intensity={120} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 4, 8]} distance={2} intensity={120} />
      </group>
      <spotLight
        castShadow
        ref={front}
        penumbra={1}
        angle={Math.PI / 4}
        position={[0, 2, 2]}
        distance={10}
        intensity={100}
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
};
