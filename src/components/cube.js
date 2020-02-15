import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useBlock } from '../blocks';
import { Euler } from 'three';
import state from '../store';
import lerp from 'lerp';

function Box({ color = 'black', ...props }) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" color={color} />
    </mesh>
  );
}

const Cube = ({ position = [0, 0, 2] }) => {
  const ref = useRef();
  const { viewportHeight, contentMaxWidth, canvasHeight } = useBlock();
  useFrame(() => {
    const curTop = state.top.current;

    const curY = ref.current.rotation.z;
    const totalHeight = (state.pages - 1) * viewportHeight;
    const nextY = 2 * (curTop / totalHeight) * Math.PI;
    const rateY = lerp(curY, nextY, 0.1);

    const rightX = contentMaxWidth / 2;
    const leftX = -rightX;
    const rateX = curTop / viewportHeight;
    const pageNum = Math.floor(rateX);
    if (pageNum % 2 === 0) {
      // move to left
      ref.current.position.x = lerp(rightX, leftX, rateX - pageNum);
    } else {
      // move to right
      ref.current.position.x = lerp(leftX, rightX, rateX - pageNum);
    }
    ref.current.position.y = lerp(canvasHeight / 2 - 1, -canvasHeight / 2 + 1, curTop / totalHeight);
    ref.current.rotation.x = rateY;
    ref.current.rotation.z = rateY;
  });

  return (
    <group ref={ref} scale={[2, 2, 2]} position={position}>
      <Box scale={[0.3, 0.3, 0.3]} rotation={new Euler(0.5, 0.5, 0)} />
    </group>
  );
};

export default Cube;
