Rails.application.routes.draw do
  resources :pokemons, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :trainers, only: [:index, :show, :edit, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
