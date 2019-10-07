class HomeController < ApplicationController
  def static
    if params[:first_nav] == 'about'
      return render 'about'
    elsif params[:first_nav] == 'contact'
      return render 'contact'
    elsif params[:first_nav] == 'writing'
      return render 'writing'
    elsif params[:second_nav] == 'career'
      return render 'career'
    elsif params[:second_nav] == 'projects' && params[:third_nav].nil?
      return render 'projects'
    else
      return render params[:third_nav]
    end
  end

  def resume
    send_file(
      "#{Rails.root}/public/resume.pdf",
      filename: "DavidBrianEthier.pdf",
      type: "application/pdf",
      disposition: 'attachment'
    )
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
      '05',
      '06',
      '07'
    ]
    render layout: false
  end
end
