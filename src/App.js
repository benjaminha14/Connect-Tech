import logo from './logo.svg';
import './App.css';
import { Vector3, TextureLoader,RepeatWrapping } from "three";
import {useLoader} from "react-three-fiber"
import { StandardEnvironment, Background, Logo } from "spacesvr";
import Floor from "./components/Floor"
import {Sky} from "@react-three/drei"
import RealIsland from "./models/RealIsland"


function App() {

  return (
      <StandardEnvironment player={{ pos: new Vector3(5, 1, 0), rot: Math.PI}}>

        <ambientLight />
        <Sky
          distance = {200}
          inclination={0.5} // Sun elevation angle from 0 to 1 (default=0)
          azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
          turbidity = {10}
          rayleigh = {2.376}
          mieCoefficient = {0.005}
          mieDirectionalIG = {0.7}
          exposure = {0.5}

        />
        <RealIsland/>

        <Floor/>
      </StandardEnvironment>
  );
}

export default App;
