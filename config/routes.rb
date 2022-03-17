Rails.application.routes.draw do

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/artworks', to: 'artworks#index'
  get '/artworks/:id', to: 'artworks#show'
  post '/artworks', to: 'artworks#create'
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
  patch '/confirm/:id', to: 'trades#confirm'
  delete '/trades/:id', to: 'trades#destroy'


end
