import './index.css';
import './my.css';
import {Suspense, useRef,useState, useEffect} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import Header from './components/Header';
import Cool from './components/Cool';
import Info from './components/Info';
import Faq from './components/Faq';
 import { Footer } from './components/Footer';
import Pro from './components/Pro';
import Prodo from './components/Prodo';

 

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.setStripes}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}material-color={props.customColors.soul} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.soul}/>
    </group>
  )
}


function App() {
 




  const [mesh,setMesh] = useState("#54a8f8")
  const [stripes,setStripes] = useState("#7CFC00")
  const [soul,setSoul] = useState("#ffffff")

  return (
    <>
   
   
    <Cool/>
    <Faq/>
    <Info/>
    <Pro/>
    <Prodo/>

    <div className="App">
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Model customColors={{mesh:mesh, stripes:stripes , soul:soul }}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>
                
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <label htmlfor="mesh">Main</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <label htmlfor="stripes">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                        <label htmlfor="soul">Soul</label>
                      
                    </div>
                </div><hr/><br/>
            </div> 
        </div>
       
    </div>
    <Footer/>
    </>
  );
}







export default App;
