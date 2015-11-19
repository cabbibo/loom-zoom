function Catenary( type , subdivisions , vs , fs , startPoint, endPoint){
  
  this.startPoint = startPoint || new THREE.Vector3(0,0,0);
  this.endPoint   = endPoint   || new THREE.Vector3(1,0,0);
  this.type = type;

  console.log( this.startPoint );

  this.color = new THREE.Color("#fff");

  var geo = this.createGeo(subdivisions);

  var mat = new THREE.ShaderMaterial({
    uniforms: {
      startPoint:       { type:"v3" , value: this.startPoint },
      endPoint:         { type:"v3" , value: this.endPoint },
      color:            { type:"c"  , value: this.color    },
      connectionType:   { type:"f"  , value: type == "in" ? 1 : 1 }
    },
    vertexShader: vs,
    fragmentShader: fs
  });

  this.body = new THREE.Line( geo , mat );




  this.active = 0;



}


Catenary.prototype.setColor = function( color ){

  this.color.copy( new THREE.Color( color ));

}


Catenary.prototype.createGeo = function( subdivisions ){

  var geo = new THREE.BufferGeometry();

  var positions = new Float32Array( (subdivisions) * 3 );

  var pos  = new THREE.BufferAttribute( positions , 3 );

  geo.addAttribute( 'position' , pos );

  for( var i = 0; i < subdivisions; i++ ){

    positions[ i * 3 + 0 ] = i / subdivisions;
    positions[ i * 3 + 1 ] = i;
    positions[ i * 3 + 2 ] = 0;

  }
  

  return geo;

  
}


Catenary.prototype.update = function(){

  if( this.active == 1 ){

    if( this.type == "out" ){
      this.endPoint.copy( mouse.position );
    }else{
      this.startPoint.copy( mouse.position );
    }


  }

}