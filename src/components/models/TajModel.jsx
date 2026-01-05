import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const TajModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/taj-mahal.glb");

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.06}
      position={[0, -1, 0]}
    />
  );
});

export default TajModel;
useGLTF.preload("/models/taj-mahal.glb");
