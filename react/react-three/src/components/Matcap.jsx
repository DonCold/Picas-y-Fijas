import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Matcap = () => {
  const matcap = useLoader(TextureLoader, 'matcap1.png')

  return (
    <mesh position={[-4, 0, 0]}>
      <torusKnotBufferGeometry args={[1, 0.3, 100, 100]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  )
}

export default Matcap
