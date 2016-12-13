Rails.application.routes.draw do
  root 'homes#index'
  get '/graphics' => 'homes#graphics'
  get '/books' => 'homes#books'
  get '/hinano' => 'homes#hinano'

  resources :homes, only: [:index, :show]
end
