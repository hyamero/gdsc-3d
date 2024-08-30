import * as THREE from "three";
import { GBuilding } from "./components/GBuilding";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Float, Sparkles } from "@react-three/drei";
import {
  Bloom,
  Noise,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";
import { Lights } from "./components/Lights";

export default function App() {
  return (
    <div className="h-full">
      <Scene />
    </div>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={[0x050505, 0, 15]} />
      <pointLight position={[0, 10, -7]} intensity={1} />
      <Lights />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <GBuilding />
      </Float>

      <Cloud position={[0, -3.5, 1.5]} rotation={[0, -Math.PI / 6, 0]} />

      <Sparkles
        scale={[5, 4, 10]}
        color="red"
        count={15}
        noise={1}
        opacity={0.2}
        size={2}
        speed={1}
        position={[0, 2, 2]}
      />
      <Sparkles
        scale={[5, 4, 10]}
        color="cyan"
        count={15}
        noise={1}
        opacity={0.2}
        size={2}
        speed={1}
        position={[3, -1, 0]}
      />
      <Sparkles
        scale={[5, 4, 10]}
        color="yellow"
        count={15}
        noise={1}
        opacity={0.2}
        size={2.5}
        speed={1}
        position={[-2.5, 1, 0]}
      />
      <Sparkles
        scale={[5, 4, 10]}
        color="green"
        count={15}
        noise={1}
        opacity={0.2}
        size={4}
        speed={1}
        position={[-0, -2.5, 2]}
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
