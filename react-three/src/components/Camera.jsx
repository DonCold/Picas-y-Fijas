import { PerspectiveCamera } from '@react-three/drei'

const Camera = () => {
  return (
    <PerspectiveCamera
      makeDefault
      position={[-10, 5, -5]}
      fov={25}
    />
  )
}

export default Camera
