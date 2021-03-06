class ReviewsController < ApplicationController
  def create
    @booking = Booking.find(params[:booking_id])
    @review = Review.new(review_params)
    @review.booking = @booking
    @user = current_user

    if @review.save
      redirect_to bookings_path
      flash[:notice] = "Thank you for your feedback #{@review.booking.user.name}!"
    end
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    redirect_to bookings_path
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to bookings_path
  end

  private

  def review_params
    params.require(:review).permit(:rating, :rating_host, :comment)
  end
end
