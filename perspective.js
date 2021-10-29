perspective = function(scene, renderer){
	var per_view=1; //1 : perspective(default), 0 : orthographic
	const per_cam = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.01, 1000);
	per_cam.position.z = 3;
	const ortho_cam = new THREE.OrthographicCamera(-6,6,3,-3,0.01, 1000 );
	
	document.getElementById("Button0").onclick = function(){ //정면도
		ortho_cam.position.z = 3;
		ortho_cam.position.x = 0;
		ortho_cam.position.y = 0;
		ortho_cam.lookAt(new THREE.Vector3(0,0,-3))
		per_view = 0 //orthographic
	};
	document.getElementById("Button1").onclick = function(){ //좌측면도
		ortho_cam.position.z = 0;
		ortho_cam.position.x = -3;
		ortho_cam.position.y = 0;
		ortho_cam.lookAt(new THREE.Vector3(3,0,0))
		per_view = 0 //orthographic
	};
	document.getElementById("Button2").onclick = function(){ //평면도
		ortho_cam.position.z = 0;
		ortho_cam.position.x = 0;
		ortho_cam.position.y = 3;
		ortho_cam.lookAt(new THREE.Vector3(0,-3,0))
		per_view = 0 //orthographic
	};
	document.getElementById("Button3").onclick = function(){ //입체도
		per_cam.position.z = 3;
		per_cam.position.x = 0;
		per_cam.position.y = 0;
		per_view = 1 //perspective
	};
	
	var controls = new THREE.OrbitControls (per_cam, renderer.domElement);
	
	if(per_view==1){
		controls.update();
		renderer.render( scene, per_cam ); //perspective
	}
	if(per_view==0){
		renderer.render( scene, ortho_cam ); //orthographic
	}
	
}