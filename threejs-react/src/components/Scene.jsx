import { useRef, useEffect } from "react"

import { mountScene, cleanUpScene } from './Script'

const Scene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    mountScene(mountRef.current)

    return () => {
      cleanUpScene()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
    </div>
  )
}

export default Scene
