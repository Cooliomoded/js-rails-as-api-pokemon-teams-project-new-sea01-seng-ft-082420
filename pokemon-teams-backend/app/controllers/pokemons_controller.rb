class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: pokemons
    end

    def show
        pokemon = Pokemon.find(params[:id])
        render json: pokemon
    end

    def new
        pokemon = Pokemon.new
        render json: pokemon
    end

    def create
    end

    def edit
    end

    def update
    end

    def destroy
    end
end
