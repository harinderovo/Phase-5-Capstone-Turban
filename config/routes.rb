Rails.application.routes.draw do
  
  resources :purchases, only: [:index, :show, :create]
  resources :products, only: [:index, :show]
  resources :bookings
  resources :events, only: [:index, :show]
  resources :users, except: [:show, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/current_user", to: "users#show"
  patch "/update-profile", to: "users#update"
  delete "/bookings/:id", to: "bookings#destroy"
  delete "/users/:id", to: "users#destroy"
  # destroy "/delete-profile", to: "users#delete"
  # get "/users", to: "users#show"
  # post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
