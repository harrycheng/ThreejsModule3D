import * as THREE from "three"

var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(render.domElement);

var camera = new THREE.PerspectiveCamera(45 , window.innerWidth / window.innerHeight, 1, 500);

camera.position.set(0, 0, 100);
camera.lookAt(0,0,0);

var scene = new THREE.Scene();



var texture = new THREE.TextureLoader().load( "../asset/cjy.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );



scene.add(texture);

render.render(scene, camera);
