const Lights = () => {
  return (
    <>
      <directionalLight
        position={[10, 10, 10]}
      />
      {/* <pointLight position={[1, 3, 0]} /> */}
      <ambientLight
        color={0xffffff}
        intensity={0.2}
      />
    </>
  )
}

export default Lights
