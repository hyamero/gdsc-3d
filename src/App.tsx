import * as THREE from "three";
import { GBuilding } from "./components/GBuilding";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
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
      <Rig />
      <Lights />
      <fog attach="fog" args={[0x050505, 0, 20]} />
      <pointLight position={[0, 10, -7]} intensity={1} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <GBuilding />
      </Float>

      {/* <Sparkles count={60} scale={[20, 20, 10]} size={1} speed={2} /> */}
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
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={1}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
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
