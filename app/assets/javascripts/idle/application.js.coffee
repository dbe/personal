#=require idle/idle.module
#=require idle/level.module

console.log("in idle/application.coffee")
console.log(new Idle.Level(2,5))


window.requestAnimationFrame(
  ->
    console.log("In request animation frame")
    l = new Idle.Level(2,4)
)
