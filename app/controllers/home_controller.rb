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
end
