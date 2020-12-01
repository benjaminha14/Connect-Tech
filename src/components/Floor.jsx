
import { BufferGeometry, PlaneBufferGeometry } from "three";
import { Vector3, TextureLoader, RepeatWrapping } from "three";
import * as THREE from "three";
import { useLoader } from "react-three-fiber"
import { StandardEnvironment, Background, Logo } from "spacesvr";


const Floor = () => {
    const texture = useLoader(TextureLoader, 'sand.jpg');
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat = new THREE.Vector2(5, 5);

    return (<mesh rotation-x={-Math.PI / 2} scale={[1, 1, 0.02]} >
        {/*<circleGeometry args={[20,8]} />*/}
        <sphereGeometry args={[20, 20, 20]} />

        <meshBasicMaterial map={texture} />
    </mesh>);
};

export default Floor;
