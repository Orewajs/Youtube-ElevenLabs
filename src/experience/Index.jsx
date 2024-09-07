import * as THREE from "three";
import vertexShader from "../shaders/elevenlabs/vertexShader.glsl";
import fragmentShader from "../shaders/elevenlabs/fragmentShader.glsl";
import { useFrame } from "@react-three/fiber";

const Index = () => {
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uColor1: { value: new THREE.Color("#FF7E1C") },
      uColor2: { value: new THREE.Color("#00243E") },
      uFrequency: { value: 0.75 },
      uAmplitude: { value: 0.5 },
      uTime: { value: 0.0 },
    },
    side: THREE.DoubleSide,
  });

  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.getElapsedTime();
  });
  return (
    <>
      <mesh material={material} rotation-x={Math.PI * 0.5}>
        <planeGeometry args={[10, 10, 200, 200]} />
      </mesh>
    </>
  );
};

export default Index;
