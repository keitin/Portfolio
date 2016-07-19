Rails.application.routes.draw do
  root 'homes#index'
  get '/graphics' => 'homes#graphics'
  get '/books' => 'homes#books'

  resources :homes, only: [:index, :show]
end
