console.log("In emerge application js");

var CONSTANTS = {stageWidth: 800, stageHeight: 600};
var renderer;
var stage;
var fishes;
var food;
var velocityVectorGraphics;

setupRenderer();
setupGraphics();

function setupRenderer() {
  renderer = PIXI.autoDetectRenderer(CONSTANTS['stageWidth'], CONSTANTS['stageHeight'], {backgroundColor: 0x33BBFF});
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();
}

function setupGraphics() {
  velocityVectorGraphics = new PIXI.Graphics();

  stage.addChild(velocityVectorGraphics);

  PIXI.loader
    .add("assets/emerge/fish.png")
    .add("assets/emerge/food.png")
    .load(function() {

      fishes = [];

      for(var i = 0; i < 10; i++) {
        fishes.push(new Fish(Util.randomPoint()));
      }

      for(var i = 0; i < fishes.length; i++) {
        stage.addChild(fishes[i]);
      }

      food = new Food(Util.randomPoint());
      stage.addChild(food);

      //Loading is all done, kick off animation
      animate();
    });

}

function animate() {
  requestAnimationFrame(animate);

  velocityVectorGraphics.clear();

  for(var i = 0; i < fishes.length; i++) {
    var fish = fishes[i];
    fish.move(); 

    if(Util.spriteCollide(fish, food)) {
      console.log("Collide!");
      stage.removeChild(food);
      food = new Food(Util.randomPoint());
      stage.addChild(food);
    }
  }

  renderer.render(stage);
}


//--------- Objects ----------//

//Fish is a subclass of Sprite
function Fish(initialLocation) {
  PIXI.Sprite.call(this, PIXI.loader.resources["assets/emerge/fish.png"].texture);

  this.position = initialLocation ? initialLocation : new PIXI.Point(0, 0);

  this.anchor.set(0.5, 0.5);

  var velocity = new Victor(0,0);
  var maxSpeed = 5;
  var maxForce = 0.1;
  //var calculateDestination = Util.mouseDestination;
  var calculateDestination = Util.spriteDestination;
  var that = this;

  //-------- Public Functions -------//

  Fish.prototype.move = function() {
    updateVelocity();

    this.x += velocity.x;
    this.y += velocity.y;
  }

  //-------- Private Functions ------//

  function updateVelocity() {
    var destination = calculateDestination(food);

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


//Food is a subclass of PIXI.Sprite
function Food(initialLocation) {
  PIXI.Sprite.call(this, PIXI.loader.resources["assets/emerge/food.png"].texture);

  this.position = initialLocation ? initialLocation : new PIXI.Point(0, 0);

  this.scale.set(0.05, 0.05);
  this.anchor.set(0.5, 0.5);
}

Food.prototype = Object.create(PIXI.Sprite.prototype);

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
//TODO: Make this a more clear interface
Util.mouseDestination = function() {
  return renderer.plugins.interaction.mouse.global;
}

Util.spriteDestination = function(goal) {
  return new PIXI.Point(goal.x, goal.y);
}

//Calculates whether or not 2 PIXI.Sprites collide
//TODO: Might want to try out circular detection or another algorithm to avoid the re-originating the rectangles each calculation
Util.spriteCollide = function(a, b) {
  var aw = a.width;
  var ah = a.height;
  var bw = b.width;
  var bh = b.height;

  //Rearranging 'x' and 'y' to be the top left side of the box rather than the center.
  var ax = a.x - (aw / 2);
  var ay = a.y - (ah / 2);
  var bx = b.x - (bw / 2);
  var by = b.y - (bh / 2);

  return (ax < bx + bw) && (bx < ax + aw) && (ay < by + bh) && (by < ay + ah);
}

Util.randomPoint = function() {
  return new PIXI.Point(Math.random() * CONSTANTS['stageWidth'], Math.random() * CONSTANTS['stageHeight']);
}
