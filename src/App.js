import './App.css';

import { Suspense, useRef } from 'react'
import * as THREE from 'three'

import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { Image, Environment, Loader,FirstPersonControls,PointerLockControls, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from 'leva'
import { useGLTF, Sky, Stars, MeshReflectorMaterial, MeshDistortMaterial} from '@react-three/drei'
import typeexample from './text.glb'


function Zoom() {
  const { zoom } = useControls({ 
    zoom: { value: 0.6, min: 0.1, max: 1, step: 0.01 } })
  return useFrame((state) => {
    state.camera.zoom = THREE.MathUtils.lerp(state.camera.zoom, zoom * 2, 0.05)
    state.camera.updateProjectionMatrix()
  })
}

function Model() {
  const gltf = useGLTF(typeexample)
  return (
    <mesh>
    <primitive object={gltf.scene} />
     </mesh>
  )
}

function App() {
  const { nodes, materials } = useGLTF(typeexample)
  return (
    <div className="App">
      <Leva
         titleBar={false}/>
       <Canvas dpr={[1, 2]} style={{ height: "100vh", width: "100vw" }}>
       {/* <color attach="background" args={["black"]} /> */}
       <Sky sunPosition={[100, 20, 100]} inclination={0} azimuth={0.25} />
       <Stars radius={10} depth={50} count={10000} factor={4} saturation={0.5} fade speed={3} />

       <Suspense fallback={null}>
       
       <ambientLight />
       
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 10, 10]} /> 
        <pointLight position={[-10, 10, -10]} /> 
        <pointLight position={[-10, -10, -10]} /> 
        <pointLight position={[10, -10, 10]} />
        <pointLight position={[10, -10, 10]} />
        <pointLight position={[10, -10, 10]} />
        <pointLight position={[10, -10, 10]} />

        <group 
          transform 
          scale={5}
          rotation={[Math.PI/2,0,-0.2]}
          position={[-0.5, -0.2, 0]}
          // position={[-0.3, 0, 0]}
          >

        <mesh geometry={nodes.Curve008.geometry} material={nodes.Curve008.material}>
        <meshStandardMaterial attach="material" wireframe={false} color={"#049ef4"} flatShading={false} roughness={0.25} metalness={0.99}/>
        {/* <MeshDistortMaterial distort={1} speed={0.05} /> */}
        </mesh>
        {/* <Model /> */}

        {/* <mesh>
  <sphereGeometry />
    <MeshDistortMaterial distort={0.5} speed={1} />
    </mesh> */}

        </group>

        {/* <Environment 
        background={true}
        files={[
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c00.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c01.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c02.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c03.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c04.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c05.jpg`,
        ]}
        /> */}

{/* <Environment 
        background={true}
        files={[
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_px.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_nx.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_py.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_ny.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_pz.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/MilkyWay/dark-s_nz.jpg`,
        ]}
        /> */}

{/* <Environment 
        background={true}
        files={[
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/posx.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/negx.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/posy.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/negy.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/posz.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/Park2/negz.jpg`,

        ]}
        /> */}
        
        </Suspense>
        
        {/* <FirstPersonControls
          movementSpeed={1.5}
          lookSpeed= {0.00}
          /> */}
          {/* <PointerLockControls/> */}
        <OrbitControls 
          minDistance={0.1}
          maxDistance={1}
          // minPolarAngle={-Math.PI}
          // maxPolarAngle={Math.PI}
          // minAzimuthAngle={-Math.PI * 0.1}
          // maxAzimuthAngle={Math.PI * 0.1}
          autoRotate="true"
        autoRotateSpeed={5}
          />
         {/* <PerspectiveCamera position={[-20, 0, -20]} /> */} 

         
         <Zoom />

      </Canvas>
      <Loader />

    </div>
  );
}

export default App;
