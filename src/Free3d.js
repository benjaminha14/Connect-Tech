import logo from './logo.svg';
import './style/App.css';
import { Vector3, TextureLoader, RepeatWrapping } from 'three';
import { useLoader } from 'react-three-fiber';
import { StandardEnvironment, Background, Logo } from 'spacesvr';
import Floor from './components/Floor';
import TimerSky from './components/TimerSky';
import { Sky } from '@react-three/drei';
import RealIsland from './models/RealIsland';
import Header from './Header';

function Free3d() {
  return (
    <StandardEnvironment player={{ pos: new Vector3(5, 1, 0), rot: Math.PI }}>
      <ambientLight />

      <TimerSky />
      <RealIsland />

      <Floor />
    </StandardEnvironment>
  );
}

export default Free3d;
