Rails.application.routes.draw do
  get 'artworks/show'
  get 'artworks/create'
  get 'artworks/destroy'
  get 'trades/show'
  get 'trades/create'
  get 'trades/destroy'
  get 'users/show'
  get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
