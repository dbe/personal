console.log("In emerge application js");

var renderer;
var stage;
var fish;
var graphics;

setupRenderer();
setupGraphics();

function setupRenderer() {
  renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x33BBFF});
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();
}

function setupGraphics() {
  graphics = new PIXI.Graphics();

  stage.addChild(graphics);

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
  requestAnimationFrame(animate);

  graphics.clear();

  fish.move();

  renderer.render(stage);
}


//--------- Objects ----------//

//Fish is a subclass of Sprite
function Fish() {
  PIXI.Sprite.call(this, PIXI.loader.resources["assets/emerge/fish.png"].texture);

  this.velocity = new Victor(0,0);
  this.maxSpeed = 5;
  this.maxForce = 0.1;

  //this.acceleration = 0.01;

  this.destination = new PIXI.Point(250,250);


  Fish.prototype.move = function() {

    
    //TODO: Clean this up by getting it out of the class and using a callback to set the destination on this object
    this.destination = renderer.plugins.interaction.mouse.global;

    var desired = Util.calculateUnitVector(this.position, this.destination);
    desired.multiplyScalar(this.maxSpeed);

    var steering = desired.clone().subtract(this.velocity);

    //If steering exceeds max force
    if(steering.magnitude() > this.maxForce) {
      steering.divideScalar(steering.magnitude() / this.maxForce);
    }

    this.velocity = steering.clone().add(this.velocity);

    drawVelocities(this.velocity, desired, steering, this.position);

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  
  function drawVelocities(current, desired, steering, origin) {
    drawVelocity(desired, 0x00FF00, origin, 50);
    drawVelocity(current, 0x0000FF, origin, 50);
    drawVelocity(steering, 0xFF0000, origin, 50 * 50);
  }
  

  function drawVelocity(v, color, origin, lineScale) {
    graphics.beginFill(color)
    graphics.lineStyle(2, color);

    graphics.moveTo(origin.x, origin.y);
    graphics.lineTo(origin.x + v.x * lineScale, origin.y + v.y * lineScale);
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
