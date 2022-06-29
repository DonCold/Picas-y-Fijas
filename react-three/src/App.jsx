import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import Lights from './components/Lights'

import Camera from './components/Camera'
import Matcap from './components/Matcap'
import Bricks from './components/Bricks'

import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas >
        <color attach="background" args={["#FFFFFF"]} />
        <Camera />
        <Lights />

        <mesh position={[4, 0, 0]}>
          <torusKnotBufferGeometry args={[1, 0.3, 100, 100]} />
          <meshNormalMaterial flatShading />
        </mesh>

        <Suspense fallback={null}>
          <Matcap />
          <Bricks />
          <Environment
            files={'assets/light/brown_photostudio_02_4k.hdr'}
          />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
