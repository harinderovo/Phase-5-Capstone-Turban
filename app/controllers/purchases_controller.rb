class PurchasesController < ApplicationController

    def index
        render json: Purchase.all, status: :ok
    end

    def show
        render json: @purchase, status: :ok
    end

    def create
        params[:cart].each do |p|
            product = Product.find(p[:id])
            @user.purchases.create!(quantity: p[:quantity], product_id: product.id)
        end
        byebug
        render json: @user.purchases, status: :created
    end

    # def create
    #     user = User.create!(purchase_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end


    private

    def find_user
        purchase = Purchase.find(params[:id])
    end

    def purchase_params
        params.permit(:quantity, :user_id, :product_id)
    end
end
