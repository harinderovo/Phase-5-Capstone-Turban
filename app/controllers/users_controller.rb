class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     render json: User.find(params[:id]), status: :ok
    # end

    def show
        render json: @user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        find_user
        @user.update!(location: params[:location])
        render json: @user, status: :accepted
      end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def find_user
        user= User.find(params[:id])
    end

    def user_params
        params.permit(:name :email, :phonenumber, :password, :password_confirmation, :booking)
    end
end
