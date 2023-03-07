class ProductsController < ApplicationController

    def index
        render json: Product.all, status: :ok
    end

    def show 
        render json: Product.find(params[:id]), status: :ok
    end
end
