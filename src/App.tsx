import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GBuilding } from "./components/GBuilding";

export default function App() {
  return (
    <div className="h-full">
      <Scene />
    </div>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <GBuilding />
      <OrbitControls />
    </Canvas>
  );
}
