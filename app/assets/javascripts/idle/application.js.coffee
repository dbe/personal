#=require idle/idle.module
#=require idle/level.module
#=require idle/game.module

window.requestAnimationFrame(
  ->
    console.log("In request animation frame")
    canvas = $('#idle-canvas')[0]

    if canvas
      console.log("Creating idle game")
      level = new Idle.Level(40,40)
      window.game = new Idle.Game(level)
      window.cgr = new Idle.CanvasGameRenderer(canvas, game)
      cgr.render()
    else
      console.log("No game canvas detected. Aborting")
)
