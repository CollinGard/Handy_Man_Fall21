Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do

    resources :workers do
      resources :services
    end

    resources :services do
      resources :comments 
    end
  end

end
