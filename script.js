const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const loader = new THREE.FontLoader();
loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function(font) {    const textGeometry = new THREE.TextGeometry("Hello World", {
        font: font,
        size: 3,
        height: 3,
        curveSegments: 1,
        bevelEnabled: fasle,
        bevelThickness: 0.1,
    });
    const text = new THREE.Mesh(textGeometry, material);
    scene.add(text);
});

function animate() {
    requestAnimationFrame(animate);
    circle.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();