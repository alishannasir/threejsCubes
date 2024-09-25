import * as THREE from 'three';
import { FontLoader }from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
const loader = new FontLoader();

{
    function loadFont(url){
        return new Promise((resolve, reject) => {
            loader.load(url, resolve, undefined, reject);
        });
    }
    
    async function doit(){
        const font = await loadFont("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json")
        const geometry = new TextGeometry('three.js', {    font: font,
        size: 2.0,
        depth: 0.1,
        curveSegments: 1,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 20,
        bevelSegments: 5,
     });
     const mesh = new THREE.Mesh(geometry, createMaterial());
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
       
        const parent = new THREE.Object3D();
        parent.add(mesh);

        addObject(-1, -1, parent);
        scene.add(parent);
    }
    doit();
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

function createMaterial(){
    const material = new THREE.MeshBasicMaterial({ color: "white" });
    return material;
}

function addObject(x, y, parent){
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const mesh = new THREE.Mesh(geometry, createMaterial());
    mesh.position.set(x, y, 0);
    parent.add(mesh);
}   
function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
  }
  animate();

