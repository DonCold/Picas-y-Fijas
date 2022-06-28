import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let currentMount = {
  clientWidth: 100,
  clientHeight: 100
}
let methers = [currentMount.clientWidth, currentMount.clientHeight]
let aspectRatio = methers[0] / methers[1]

const textureLoader = new THREE.TextureLoader()
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
  25,
  aspectRatio,
  0.1,
  1000
)
camera.position.z = 15

const resize = () => {
  const methers = [currentMount.clientWidth, currentMount.clientHeight]
  const aspectRatio = methers[0] / methers[1]

  renderer.setSize(...methers)
  camera.aspect = aspectRatio
  camera.updateProjectionMatrix()
}

export const mountScene = (mountRef) => {
  currentMount = mountRef
  methers = [currentMount.clientWidth, currentMount.clientHeight]
  aspectRatio = methers[0] / methers[1]

  scene.add(camera)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target = new THREE.Vector3(0, 0, 0)
  controls.enableDamping = true

  const AL = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(AL)

  const pointLight = new THREE.PointLight(0xff0000, 1.3)
  pointLight.position.set(2, 2, 0)
  scene.add(pointLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)

  const envitomentMap = new THREE.CubeTextureLoader()
  const envMap = envitomentMap.load([
    'assets/light/px.png',
    'assets/light/nx.png',
    'assets/light/py.png',
    'assets/light/ny.png',
    'assets/light/pz.png',
    'assets/light/nz.png',
  ])
  scene.environment = envMap
  scene.background = envMap

  const map = textureLoader.load('assets/brick/Brick_Wall_017_basecolor.jpg')
  const aoMap = textureLoader.load('assets/brick/Brick_Wall_017_ambientOcclusion.jpg')
  const roughnessMap = textureLoader.load('assets/brick/Brick_Wall_017_roughness.jpg')
  const normalMap = textureLoader.load('assets/brick/Brick_Wall_017_normal.jpg')
  const heightMap = textureLoader.load('assets/brick/Brick_Wall_017_height.png')

  const cube2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1,
      250,
      250,
      250
    ),
    new THREE.MeshStandardMaterial({
      map,
      aoMap,
      roughnessMap,
      normalMap,
      displacementMap: heightMap,
      displacementScale: 0.05,
    })
  )
  scene.add(cube2)
  cube2.position.z = 3

  const matcap = textureLoader.load('assets/matcap1.png')

  const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      transparent: true,
      opacity: 0.5,
      wireframe: true
    })
  )
  scene.add(cube)
  cube.position.z = -3

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry( 0.8, 32, 16 ),
    new THREE.MeshMatcapMaterial({
      matcap: matcap,
    })
  );

  scene.add( sphere );
  sphere.position.x = 2
  sphere.position.y = 2

  const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry( 0.5, 0.18, 100, 50 ),
    new THREE.MeshNormalMaterial({
      flatShading: true
    })
  );
  scene.add( torusKnot );
  torusKnot.position.set( -2, -0.5, 0 );
  torusKnot.scale.set( 2, 2, 2 );

  const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
  resize()

  window.addEventListener('resize', resize)
  currentMount.appendChild(renderer.domElement)
}

export const cleanUpScene = () => {
  window.removeEventListener('resize', resize)
  currentMount.removeChild(renderer.domElement)
}
