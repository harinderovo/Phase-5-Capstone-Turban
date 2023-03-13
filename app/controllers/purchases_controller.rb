class PurchasesController < ApplicationController

    def index
        render json: Purchase.all, status: :ok
    end

    def show
        render json: @purchase, status: :ok
    end

    def create
        product = Product.find(purchase_params[:product_id])
        new_purchase = @user.purchases.create!(purchase_params.merge(product: product))
        render json: new_purchase, status: :created
    end

    # def create
    #     user = User.create!(purchase_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end

    # def update
    #     find_purchase
    #     @purchase.update!(location: params[:location])
    #     render json: @purchase, status: :accepted
    #   end

    # def destroy
    #     purchase = Purchase.find(params[:id])
    #     purchase.destroy
    #     head :no_content
    # end

    private

    def find_user
        purchase = Purchase.find(params[:id])
    end

    def purchase_params
        params.permit(:quantity, :user_id, :product_id)
    end
end
