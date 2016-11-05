console.log("In emerge application js");

var renderer;
var stage;
var fish;
var velocityVectorGraphics;

setupRenderer();
setupGraphics();

function setupRenderer() {
  renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x33BBFF});
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();
}

function setupGraphics() {
  velocityVectorGraphics = new PIXI.Graphics();

  stage.addChild(velocityVectorGraphics);

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

  velocityVectorGraphics.clear();

  fish.move();

  renderer.render(stage);
}


//--------- Objects ----------//

//Fish is a subclass of Sprite
function Fish() {
  PIXI.Sprite.call(this, PIXI.loader.resources["assets/emerge/fish.png"].texture);

  var velocity = new Victor(0,0);
  var maxSpeed = 5;
  var maxForce = 0.1;
  var calculateDestination = Util.mouseDestination;
  var that = this;

  //-------- Public Functions -------//

  Fish.prototype.move = function() {
    updateVelocity();

    this.x += velocity.x;
    this.y += velocity.y;
  }

  //-------- Private Functions ------//

  function updateVelocity() {
    var destination = calculateDestination();

    var desired = Util.calculateUnitVector(that.position, destination);
    desired.multiplyScalar(maxSpeed);

    var steering = desired.clone().subtract(velocity);

    //If steering exceeds max force
    if(steering.magnitude() > maxForce) {
      steering.divideScalar(steering.magnitude() / maxForce);
    }

    velocity = steering.clone().add(velocity);

    //TODO: Make that optional based on debug settings
    drawVelocities(velocity, desired, steering, that.position);
  }
  
  function drawVelocities(current, desired, steering, origin) {
    drawVelocity(desired, 0x00FF00, origin, 50);
    drawVelocity(current, 0x0000FF, origin, 50);
    drawVelocity(steering, 0xFF0000, origin, 50 * 50);
  }

  function drawVelocity(v, color, origin, lineScale) {
    velocityVectorGraphics.beginFill(color)
    velocityVectorGraphics.lineStyle(2, color);

    velocityVectorGraphics.moveTo(origin.x, origin.y);
    velocityVectorGraphics.lineTo(origin.x + v.x * lineScale, origin.y + v.y * lineScale);
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

//Just returns a PIXI.Point where the mouse is currently
Util.mouseDestination = function() {
  return renderer.plugins.interaction.mouse.global;
}
