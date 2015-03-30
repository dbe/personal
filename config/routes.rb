Rails.application.routes.draw do
  root 'home#about'

  get '/about/', to: 'home#about', as: 'about'
  get '/experience/', to: 'home#experience', as: 'experience'
end
