import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, Dom, useFrame } from 'react-three-fiber';
import state from './store';
import './styles.css';
import Pages from './components/pages';
import lerp from 'lerp';

function Startup() {
  const ref = useRef();
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)));
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#dfdfdf" transparent />
    </mesh>
  );
}

function App() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Canvas className="canvas" orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}

export default App;
