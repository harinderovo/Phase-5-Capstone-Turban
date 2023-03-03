class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id]= user.id
            render json: user, status: :ok
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    # def destroy 
    #     session.clear
    #     head :no_content
    # end

    private 

    def find_user
        user= User.find(params[:id])
    end
end