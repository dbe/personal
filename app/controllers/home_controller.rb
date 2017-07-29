class HomeController < ApplicationController
  def static
    if params[:first_nav] == 'about'
      return render 'about'
    elsif params[:first_nav] == 'contact'
      return render 'contact'
    elsif params[:second_nav] == 'career'
      return render 'career'
    else
      return render params[:third_nav]
    end
  end

  def idle
    render layout: false
  end

  def emerge
    render layout: false
  end

  def p5
    @demo = params[:demo]
    @demos = [
      '01_infinity_circles',
      '02_a_random_walk',
      '03_single_dropper',
      '04_mouse_dropper',
      '05'
    ]
    render layout: false
  end
end
