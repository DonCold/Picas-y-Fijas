import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
/* import * as THREE from 'three' */

const Bricks = () => {
  const baseColor = useLoader(TextureLoader, 'brick/Brick_Wall_017_basecolor.jpg')
  const normalMap = useLoader(TextureLoader, 'brick/Brick_Wall_017_normal.jpg')
  const aoMap = useLoader(TextureLoader, 'brick/Brick_Wall_017_ambientOcclusion.jpg')
  const roughnessMap = useLoader(TextureLoader, 'brick/Brick_Wall_017_roughness.jpg')
  const disMap = useLoader(TextureLoader, 'brick/Brick_Wall_017_height.png')
  /* baseColor.minFilter = THREE.NearestFilter
  baseColor.magFilter = THREE.NearestFilter */

  return (
    <mesh  position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1, 120, 120, 120]} />
      <meshStandardMaterial
        map={baseColor}
        normalMap={normalMap}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        displacementMap={disMap}
        displacementScale={0.01}
      />
    </mesh>
  )
}

export default Bricks
