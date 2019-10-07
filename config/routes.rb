Rails.application.routes.draw do
  root 'home#static', :defaults => {:first_nav => 'about'}

  get '/idle', :to => 'home#idle'

  get '/emerge', :to => 'home#emerge'

  get '/p5(/:demo)', :to => 'home#p5'

  get '/resume', :to => 'home#resume'

  get '/:first_nav(/:second_nav(/:third_nav))', :to => 'home#static', :defaults => {:first_nav => 'about', :second_nav => 'career', :third_nav => 'all'}
end
