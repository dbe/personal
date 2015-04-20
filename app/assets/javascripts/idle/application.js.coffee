#=require idle/idle.module
#=require idle/level.module
#=require idle/game.module

console.log("in idle/application.coffee")

window.requestAnimationFrame(
  ->
    console.log("In request animation frame")

    level = new Idle.Level(2,4)
    canvas = $('#idle-canvas')[0]

    window.game = new Idle.Game(level)

    window.cgr = new Idle.CanvasGameRenderer(canvas, game)

    cgr.render()
)
