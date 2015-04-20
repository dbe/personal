class CanvasGameRenderer
  TILE_COLOR_MAP = {}
  TILE_COLOR_MAP[Idle.Tile.TYPES.FLOOR] = '#ccc'
  TILE_COLOR_MAP[Idle.Tile.TYPES.WALL] = '#000'

  

  constructor: (@canvas, @game) ->
    #memoize
    @canvasWidth = @canvas.width
    @canvasHeight = @canvas.height
    @tileWidth = @canvasWidth / @game.level.width
    @tileHeight = @canvasHeight / @game.level.height

    @context = @canvas.getContext('2d')
    @context.font = 'bold 12px sans-serif'
    @context.textBaseline = 'top'


  render: () ->
    @renderLevel()
    #@context.fillText("Dimensions: #{@game.level.width } x #{@game.level.height}", 0, 0)

  renderLevel: () ->
    tileMap = @game.level.getTileMap()
    for col, x in tileMap
      for tile, y in col
        @renderTile(tile, x, y)

  renderTile: (tile, x, y) ->
    pixels = @coordToPixels(x, y)
    @context.fillStyle = TILE_COLOR_MAP[tile.type]
    @context.fillRect(pixels.x, pixels.y, @tileWidth, @tileHeight)

  coordToPixels: (x, y) ->
    xPixels = x * @tileWidth
    yPixels = y * @tileHeight

    return {x: xPixels, y: yPixels}
     


Idle.CanvasGameRenderer = CanvasGameRenderer
