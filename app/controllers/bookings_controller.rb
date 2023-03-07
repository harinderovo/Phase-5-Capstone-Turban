class BookingsController < ApplicationController

    def index
        render json: @user.bookings, status: :ok
    end

    def show 
        render json: Booking.find(params[:id]), status: :ok
    end

    def create
        new_booking = @user.bookings.create!(bookings_params)
        render json: new_booking, status: :created
    end

    def update
        find_booking
        @booking.update!(bookings_params)
        render json: @booking, status: :accepted
      end

    def destroy
        booking = Booking.find(params[:id])
        booking.destroy
        head :no_content
    end

    private 

    def find_booking
        @booking = Booking.find(params[:id])
    end

    def bookings_params
        params.permit(:datetime, :location, :status, :price, :user_id, :event_id, :booking)
    end
end
