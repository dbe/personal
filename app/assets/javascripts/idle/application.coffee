console.log("in idle/application.coffee")


window.Idle = window.Idle || {}


window.requestAnimationFrame(
  ->
    console.log("In request animation frame")
    console.log(window.Idle.Tile.TYPES.FLOOR)
    t1 = new window.Idle.Tile
    console.log(t1.type)
)
