import logo from './logo.svg';
import './App.css';
import { Vector3, TextureLoader,RepeatWrapping } from "three";
import {useLoader} from "react-three-fiber"
import { StandardEnvironment, Background, Logo, Audio } from "spacesvr";
import Floor from "./components/Floor"
import {Sky} from "@react-three/drei"
import RealIsland from "./models/RealIsland"
import TimerSky from "./components/TimerSky"


function App() {

  return (
      <StandardEnvironment player={{ pos: new Vector3(5, 1, 0), rot: Math.PI}}>

        <ambientLight />
        <TimerSky />
        <RealIsland/>
        <Audio url="lofi.mp3" position={new Vector3(0, 4, 0)} />

        <Floor/>
      </StandardEnvironment>
  );
}

export default App;
