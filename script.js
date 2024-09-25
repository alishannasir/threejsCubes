const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const radiusTop = 2.0; 
const radiusBottom = 2.0;  
const height =  1.8;  
const radialSegments = 10;  
const geometry = new THREE.CylinderGeometry(
	radiusTop, radiusBottom, height, radialSegments );
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

function animate() {
    requestAnimationFrame(animate);
    circle.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();