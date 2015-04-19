#=require idle/idle.module
#=require idle/level.module

console.log("in idle/application.coffee")

window.requestAnimationFrame(
  ->
    console.log("In request animation frame")
    window.l = new Idle.Level(2,4)
)
