function Gooey( objectControls  ){
  
  this.id = Math.random();

  this.pins  = [];

  this.controls = objectControls;


  this.uniforms = {

    pins:{ type:"v3v" , this.pins }


  }

  var mat = new THREE.ShaderMaterial({
    uniforms: this.uniforms,
    vertexShader: G.theme.gooeyVS,
    fragmentShader: G.theme.gooeyFS,
  })

  this.body = new THREE.Mesh( G.theme.gooeyGeo , mat );

  this.body.hoverOver = this.hoverOver.bind( this );
  this.body.hoverOut = this.hoverOut.bind( this );
  this.body.update = this.move.bind( this );


  this.controls.add( this.body );




}


Gooey.prototype.addPin = function( type , position ){

}


Gooey.prototype.place = function(p){

}

Gooey.prototype.move = function(){

 
}

Gooey.prototype.updatePinPositions = function(){



}

Gooey.prototype.hoverOver = function(){


}

Gooey.prototype.hoverOut = function(){


}

/*
Gooey.prototype.select = function(){


  if( !G.activeConnection ){

    var c = new Catenary( 16 , shaders.vs.catenary , shaders.fs.catenary , this.body.position.clone() );

    this.outConnections.push( c );

    G.connections.push( c );
    c.active = true;
    G.activeConnection = c;
    scene.add( c.body );

  }else{

    this.inConnections.push( G.activeConnection );
    G.activeConnection.endPoint.copy( this.body.position );
    G.activeConnection.active = false;
    G.activeConnection = null;

  }



}*/

Gooey.prototype.update = function(){


}