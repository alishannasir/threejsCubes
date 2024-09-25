// scene : the scene is the container that holds all the objects(Environment)
 const scene = new THREE.Scene();
// camera: the camera is the point of view of the user(where the user is looking)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// cube: the cube is the object that we are rendering
const geometry = new THREE.BoxGeometry(1,1,1);
// material: the material is the color of the cube
const material = new THREE.MeshPhongMaterial({ color: "yellow" });
// mesh: the mesh is the object that we are rendering
const cube = new THREE.Mesh(geometry, material);
// add the cube to the scene
scene.add(cube);
// position the camera
camera.position.z = 5;
// render the scene using the renderer
// renderer: the renderer is the object that renders the scene to the screen
// create a canvas element in the html file with the id of canvas
const canvas = document.querySelector('#canvas');
 // create a renderer webGl is the renderer that will render the scene to the screen
const renderer = new THREE.WebGLRenderer({canvas});
// set the size of the renderer to the size of the window
renderer.setSize(window.innerWidth, window.innerHeight);
// create a loop that will render the scene 60 times per second and update the cube
function animate() {
    // requestAnimationFrame is a function that will call the animate function 60 times per second
    window.requestAnimationFrame(animate);
    // render the scene to the screen
    renderer.render(scene, camera);
    // update the cube
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
}

animate();
// light: the light is the source of light in the scene 
// create a directional light
// color: the color of the light
const color = 0x00ff00;
// intensity: the intensity of the light
const intensity = 3;
// position: the position of the light
// DirectionalLight is a light that shines in a specific direction and is used to simulate light that comes from a specific direction
const light = new THREE.DirectionalLight(color, intensity);
// set the position of the light 
// x,y,z are the coordinates of the light
light.position.set(-1, 2, 30);
// add the light to the scene
scene.add(light);
// create a ambient light



