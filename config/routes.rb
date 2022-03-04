Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  get '/me', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'

  get '/artworks', to: 'artworks#index'
  get '/artworks/:id', to: 'artworks#show'
  delete '/artworks/:id', to: 'artworks#destroy'

  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  
  get '/trades', to: 'trades#index'
  get '/trades/:id', to: 'trades#show'
  get '/tradesComp/:id', to: 'trades#completed'
  get '/tradesSent/:id', to: 'trades#sent'
  get '/tradesRec/:id', to: 'trades#received'
  post '/trades', to: 'trades#create'
  delete '/trades/:id', to: 'trades#destroy'


  get 'artworks/create'
  get 'artworks/destroy'
  get 'trades/create'
  get 'trades/destroy'
  get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
