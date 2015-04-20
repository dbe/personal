console.log("In canvas_game_renderer")


class CanvasGameRenderer
  constructor: (@canvas, @game) ->
    @context = @canvas.getContext('2d')


  render: () ->
    @context.fillText("Dimensions: #{@game.level.width } x #{@game.level.height}", 0, 0)
    
