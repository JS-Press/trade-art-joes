class ArtworksController < ApplicationController

  def show
    art = Artwork.find( params[:id] )
    
    if art 
      render json: art, status: :ok
    else 
      render json: {errors: "artwork does not exist."}, status: :unprocessable_entity
    end
  end

  def index 
    render json: Artwork.all, status: :ok
  end

  def create
  end

  def destroy
  end

end
