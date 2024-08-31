import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Float, Html, Loader, Sparkles } from "@react-three/drei";
import {
  Bloom,
  Noise,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";
import { Lights } from "./Lights";
import { GBuilding } from "./GBuilding";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
      <color attach="background" args={["#210300"]} />
      <fog attach="fog" args={[0x210300, 0, 15]} />
      <pointLight position={[0, 10, -7]} intensity={1} />
      <Lights />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <GBuilding />
        </Suspense>
      </Float>

      <Cloud
        position={[0, -3.5, 1.5]}
        rotation={[0, -Math.PI / 6, 0]}
        color="#ffc3bf"
      />

      <Sparkles
        scale={[15, 15, 15]}
        color="#FF5400"
        count={60}
        noise={2}
        opacity={0.4}
        size={4}
        speed={0.6}
        position={[0, 0, -2]}
      />

      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={-3}
          luminanceSmoothing={0.9}
          height={400}
          opacity={1}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>

      <Rig />
    </Canvas>
  );
}

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(-state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
};
