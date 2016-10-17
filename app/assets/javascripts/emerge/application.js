console.log("In emerge application js");

var renderer;
var stage;
var fish;

setupRenderer();
setupGraphics();

function setupRenderer() {
  renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x33BBFF});
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();
}

function setupGraphics() {
  PIXI.loader
    .add("assets/emerge/fish.png")
    .load(function() {

      fish = new Fish();
      stage.addChild(fish);


      //Loading is all done, kick off animation
      animate();
    });

}

function animate() {
  console.log("In animate");

  requestAnimationFrame(animate);


  fish.move();




  renderer.render(stage);
}


//--------- Objects ----------//

//Fish is a subclass of Sprite
function Fish() {
  PIXI.Sprite.call(this, PIXI.loader.resources["assets/emerge/fish.png"].texture);

  this.speed = 1;
  this.acceleration = 0.01;

  this.destination = new PIXI.Point(250,250);


  Fish.prototype.move = function() {
    this.speed += this.acceleration;
    //TODO: Clean this up by getting it out of the class and using a callback to set the destination on this object
    this.destination = renderer.plugins.interaction.mouse.global;

    var unitVec = Util.calculateUnitVector(this.position, this.destination);

    this.x += unitVec.x * this.speed;
    this.y += unitVec.y * this.speed;
  }
}

Fish.prototype = Object.create(PIXI.Sprite.prototype);


window.Util = {}

//Returns a victor vector from PIXI.Point a to PIXI.Point b
Util.calculateUnitVector = function(a, b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;

  var vec = Victor(dx,dy);
  vec.normalize();
  
  return vec
}
