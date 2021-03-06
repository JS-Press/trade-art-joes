class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response

  def index 
    render json: User.all, status: :ok
  end

  def show
    user = User.find(params[:id])
    render json: user, include: [:artworks, :sent_trades, :received_trades], status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: 'error: missing info' }, status: :unprocessable_entity
    end
  end


  private 

def user_params 
  params.permit( :username, :first_name, :last_name, :password, :email, :bio, :street_address, :city, :state, :zip, :website, :profile_pic, :user )
end
  
def render_not_found_response 
    render json: { errors: 'not_found' }, status: :unauthorized
end

end
