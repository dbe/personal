#= require idle/tile.module

console.log("In level.coffee")

class Level
  #Wall is equivalent to living cell in GoL
  WALL_CHANCE = 0.4

  tileMap = []


  constructor: (@width, @height) ->
    tileMap = generateTileMap(@width, @height)

  #Take this out for production
  getTileMap: () ->
    return tileMap

  #draw: (ctx) ->
  #draw the level given a context
  #Maybe, only if we want to couple rendering with the level object

  generateTileMap = (width, height) ->
    seed = generateSeed(width, height)

    #Do iterations

    return seed
     
  generateSeed = (width, height) ->
    seed = (generateColumn(height) for i in [0...width])
    return seed
    
  generateColumn = (height) ->
    col = (generateTile() for i in [0...height])
    return col
    
  generateTile = () ->
    if Math.random() <= WALL_CHANCE
      return new Idle.Tile(Idle.Tile.TYPES.WALL)
    else
      return new Idle.Tile(Idle.Tile.TYPES.FLOOR)
    
    
  

window.Idle.Level = Level
