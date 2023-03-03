Rails.application.routes.draw do
  
  resources :purchases, only: [:index, :show, :destroy, :update]
  resources :products, only: [:index, :show]
  resources :bookings
  resources :events, only: [:index, :show]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/current_user", to: "users#show"
  patch "update", to: "sessions#update"
  # get "/users", to: "users#show"
  # post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
