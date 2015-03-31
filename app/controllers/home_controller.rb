class HomeController < ApplicationController
  def about
    @selected_nav = :about
  end

  def experience
    @selected_nav = :experience
  end
end
