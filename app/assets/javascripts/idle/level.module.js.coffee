#= require idle/tile.module

console.log("In level.coffee")

class Level
  tileMap = []

  constructor: (@width, @height) ->
#Need to populate the tileMap with widthxheight tiles



window.Idle.Level = Level
