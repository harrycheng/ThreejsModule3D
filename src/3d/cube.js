import * as THREE from 'three';

var scene  = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer();
    
    render.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(render.domElement);

	var geometry  = new THREE.BoxGeometry();
	var geometry2 = new THREE.BoxGeometry();
	var material  = new THREE.MeshBasicMaterial({
		color: 0xfffe00
	});


	var material2 = new THREE.MeshBasicMaterial({
		color: 0x00ffff
	});

	var cube = new THREE.Mesh(geometry, material);

	var cube2 = new THREE.Mesh(geometry2, material2);

	//scene.add(cube);
	scene.add(cube2);
	camera.position.z = 5;


	function myanimate() {
		requestAnimationFrame(myanimate);
		//cube.rotation.x += 0.01;
		//cube.rotation.y += 0.01;

		cube2.rotation.x += 0.001;
        cube2.rotation.y += 0.001;
        //cube2.rotation.z += 0.02;
		render.render(scene, camera);
	}

    myanimate();
    
    // export default  {
    //     //myanimate
    // }