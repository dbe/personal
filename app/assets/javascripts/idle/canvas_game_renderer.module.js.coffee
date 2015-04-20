console.log("In canvas_game_renderer")


class CanvasGameRenderer
  constructor: (@canvas, @game) ->
    @context = @canvas.getContext('2d')
    @context.font = 'bold 12px sans-serif'
    @context.textBaseline = 'top'


  render: () ->
    @context.fillText("Dimensions: #{@game.level.width } x #{@game.level.height}", 0, 0)


Idle.CanvasGameRenderer = CanvasGameRenderer
    
