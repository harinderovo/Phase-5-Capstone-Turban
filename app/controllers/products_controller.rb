class ProductsController < ApplicationController

    def index
        render json: @user.products, status: :ok
    end

    def show 
        render json: Product.find(params[:id]), status: :ok
    end
end
