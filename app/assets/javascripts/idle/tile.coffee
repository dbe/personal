class Tile
  this.TYPES = {
    FLOOR : 0,
    WALL: 1
  }

  constructor: (@type=Tile.TYPES.FLOOR) ->
    console.log("In tile constructor")




window.Idle = window.Idle || {}
window.Idle.Tile = Tile
