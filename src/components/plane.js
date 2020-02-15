import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import state from '../store';
import { useBlock } from '../blocks';
import lerp from 'lerp';

function Plane({ color = 'white', map, ...props }) {
  const { viewportHeight, offsetFactor } = useBlock();
  const material = useRef();
  let last = state.top.current;
  useFrame(() => {
    const { pages, top } = state;
    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1);
    material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1);
    last = top.current;
  });
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <meshBasicMaterial ref={material} attach="material" color={color} map={map} />
    </mesh>
  );
}

export default Plane;
