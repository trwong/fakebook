Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      resources :friends, only: [:show, :create, :update, :destroy]
    end

    resource :sessions, only: [:show, :create, :destroy]

    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index, :show, :create, :update, :destroy]
    end

    resources :friends, only: [:index, :pending_requests]

    resources :likes, only: [:index, :create, :destroy]

    get 'search', to: 'users#search', as: :search
  end

end
