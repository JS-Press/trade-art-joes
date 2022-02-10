class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response
  
  def show
    user = User.find(params[:id])
    render json: user, include: :ratings, status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 

def user_params 
    params.permit( :name, :first_name, :last_name, :password_digest, :email, :bio, :street_address, :city, :state, :zip, :website )
end
  
def render_not_found_response 
    render json: { errors: 'not_found' }, status: :unauthorized
end

end
