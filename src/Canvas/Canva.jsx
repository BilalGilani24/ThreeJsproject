import React from 'react'
import { Center, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shirt from './Shirt';
import Camera from './Camera';
import Backdrop from './Backdrop';
const Canva = () => {
  return (
    <Canvas shadows camera={{ position:[0,0,0] , fov: 25}}  gl={{ preserveDrawingBuffer: true }}
    className="w-full max-w-full h-full transition-all ease-in">
        <ambientLight intensity={0.5}/>
            <Environment preset='city'/>
            <Camera>
              <Backdrop/>
            <Center>
                <Shirt/>
            </Center>
            </Camera>
            
    </Canvas>
  )
}

export default Canva;