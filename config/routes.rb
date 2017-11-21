Rails.application.routes.draw do
  # namespace :api do
  #   get 'session/create'
  # end

  # namespace :api do
  #   get 'session/destroy'
  # end

  # namespace :api do
  #   get 'users/create'
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
  end
end
