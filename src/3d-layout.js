import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const clock = new THREE.Clock();

let light1, light2, light3, light4;
renderer.setSize(800, 600);
document.querySelector('.animation-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(100, 100, 100);
scene.add(spotLight);


const sphere = new THREE.SphereGeometry(5, 106, 80);

//lights
light1 = new THREE.PointLight(0xffffff, 20000, 300);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
scene.add(light1);

light2 = new THREE.PointLight(0xff0000, 20000, 800);
light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffffff })));
scene.add(light2);

light3 = new THREE.PointLight(0xffffff, 1800, 300);
light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 })));
scene.add(light3);

light4 = new THREE.PointLight(0xffaa00, 1800, 300);
light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 })));
scene.add(light4);

// Load SVGs and create geometry
const loader = new SVGLoader();
const svgPaths = ['/layouts/path1.svg', '/layouts/path3.svg']; // Replace with actual SVG paths
const layerSpacing = 2; // Space between layers

Promise.all(svgPaths.map(url => fetch(url).then(res => res.text()))).then(svgTexts => {
    const boundingBox = new THREE.Box3();
    svgTexts.forEach((svg, index) => {
        const paths = loader.parse(svg).paths;
        paths.forEach(path => {
            SVGLoader.createShapes(path).forEach(shape => {
                const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.8, bevelEnabled: true, bevelThickness: 0.1 });
                geometry.center(); // Center the geometry
                geometry.rotateZ(Math.PI); // Flip the geometry
                boundingBox.expandByObject(new THREE.Mesh(geometry)); // Update bounding box

                const material = new THREE.MeshStandardMaterial({ color: index === 0 ? 0xff0000 : 0x00ffff });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.z = index === 0 ? layerSpacing / 2 : -layerSpacing / 2;
                scene.add(mesh);
            });
        });
    });

    // Create filler based on bounding box dimensions
    const size = boundingBox.getSize(new THREE.Vector3());
    const filler = new THREE.Mesh(
        new THREE.BoxGeometry(size.x, size.y, 0.8),
        new THREE.MeshStandardMaterial({ transparent: true, opacity: 0.2, color: 0x00ff00 })
    );
    filler.position.set(0, 0, 0);
    scene.add(filler);
    animate();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0005;
    const delta = clock.getDelta();

    if (scene) scene.rotation.y -= 0.5 * delta;

    light1.position.x = Math.sin(time * 0.7) * 130;
    light1.position.y = Math.cos(time * 0.5) * 140;
    light1.position.z = Math.cos(time * 0.3) * 130;

    light2.position.x = Math.cos(time * 0.3) * 130;
    light2.position.y = Math.sin(time * 0.5) * 140;
    light2.position.z = Math.sin(time * 0.7) * 130;

    light3.position.x = Math.sin(time * 0.7) * 130;
    light3.position.y = Math.cos(time * 0.3) * 140;
    light3.position.z = Math.sin(time * 0.5) * 130;

    light4.position.x = Math.sin(time * 0.3) * 130;
    light4.position.y = Math.cos(time * 0.7) * 140;
    light4.position.z = Math.sin(time * 0.5) * 130;

    renderer.render(scene, camera);
}

// Camera position
camera.position.set(0, 5, 700);
camera.lookAt(0, 0, 0);
