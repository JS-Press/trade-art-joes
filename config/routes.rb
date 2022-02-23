Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  get '/me', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'

  get '/artworks', to: 'artworks#index'
  get '/artworks/:id', to: 'artworks#show'

  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  
  get '/trades', to: 'trades#index'
  get '/trades/:id', to: 'trades#show'
  post '/trades', to: 'trades#create'


  get 'artworks/create'
  get 'artworks/destroy'
  get 'trades/create'
  get 'trades/destroy'
  get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
