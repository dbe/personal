#=require idle/idle.module
#=require idle/level.module

console.log("in idle/application.coffee")

window.requestAnimationFrame(
  ->
    console.log("In request animation frame")
    window.l = new Idle.Level(2,4)
    canvas = $('#idle-canvas')[0]
    ctx = canvas.getContext('2d')
    ctx.fillRect(0, 0, 50, 50)
)
