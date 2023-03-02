class PurchasesController < ApplicationController

    def index
        render json: Purchase.all, status: :ok
    end

    def show
        render json: @purchase, status: :ok
    end

    def update
        find_purchase
        @purchase.update!(location: params[:location])
        render json: @purchase, status: :accepted
      end

    def destroy
        purchase = Purchase.find(params[:id])
        purchase.destroy
        head :no_content
    end

    private

    def find_user
        purchase = Purchase.find(params[:id])
    end

    # def user_params
    #     params.permit(:name :email, :phonenumber, :password, :password_confirmation, :booking)
    # end
end
