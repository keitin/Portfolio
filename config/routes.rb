Rails.application.routes.draw do
  root 'homes#index'
  get '/graphics' => 'homes#graphics'

  resources :homes, only: [:index, :show]
end
