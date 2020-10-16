class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers
    end

    def show
        trainer = Trainer.find(params[:id])
        render json: trainer
    end

    def edit
        trainer = Trainer.find(id: params[:id])
        render json: trainer
    end

    def update
    end
end
