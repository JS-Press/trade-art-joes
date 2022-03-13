class ArtworksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response

  def show
    art = Artwork.find( params[:id] )
    if art 
      render json: art, include: :user, status: :ok
    else 
      render json: {errors: "artwork does not exist."}, status: :unprocessable_entity
    end
  end

  def index 
    render json: Artwork.all, include: :user, status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])  
        if user
            new_art = Artwork.new( art_params )
            new_art.user_id = user.id
            if new_art.save
                render json: new_art, status: :created
            else
                render json: { errors: new_art.errors.full_messages }, status: :unprocessable_entity
            end
        else 
            puts "not in that session hash yo"
            render json: { errors: ["must login"] }, status: :unauthorized
        end
  end

  def destroy
    user = User.find_by(id: session[:user_id])  
    if user
      art = Artwork.find( params[:id] )
      if art
        sent_trades = art.sent_offers
        rec_trades = art.received_offers
        sent_trades.each(&:destroy)
        rec_trades.each(&:destroy)
        Artwork.destroy( params[:id] )
        render json: user, include: :artworks, status: :ok
      else 
        render json: {errors: "artwork does not exist."}, status: :unprocessable_entity
      end
    else
      puts "need to be logged in sorry"
      render json: { errors: ["must login"] }, status: :unauthorized
    end
  end

  private 

  def art_params 
    params.permit( :title, :artist, :year, :description, :size, :tags, :available, :url, :user_id )
  end

  def render_not_found_response 
    render json: { errors: 'not_found' }, status: :unauthorized
  end

end
