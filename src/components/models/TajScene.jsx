import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
// import Model from "./Model";

import TajModel from "./TajModel";
export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 3], fov: 50 }}
      style={{ background: "#0e0e0e",height:800 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.1} />

     <TajModel/>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
      />

      <Environment preset="studio" />
    </Canvas>
  );
}

