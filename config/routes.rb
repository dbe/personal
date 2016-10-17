Rails.application.routes.draw do
  root 'home#static', :defaults => {:first_nav => 'about'}

  get '/idle', :to => 'home#idle'

  get '/emerge', :to => 'home#emerge'

  get '/:first_nav(/:second_nav(/:third_nav))', :to => 'home#static', :defaults => {:first_nav => 'about', :second_nav => 'career', :third_nav => 'under_construction'}
end
