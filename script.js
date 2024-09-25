// Create the scene, camera, and renderer once for the whole setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Function to create cubes and add them to the same scene
function MakeInstance(geometry, color, position) {
    const material = new THREE.MeshBasicMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = position;
    scene.add(cube);
    return cube;
}

// Geometry for the cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create multiple cubes
const cubes = [
    MakeInstance(geometry, "yellow", 4),
    MakeInstance(geometry, "red", 2),
    MakeInstance(geometry, "blue", -2),
];

function render(time) {
    time *= 0.001;  // Convert time to seconds

    // Rotate each cube
    cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    // Render the scene with the camera
    renderer.render(scene, camera);

    // Request the next frame
    requestAnimationFrame(render);
}

// Start the rendering loop
requestAnimationFrame(render);
