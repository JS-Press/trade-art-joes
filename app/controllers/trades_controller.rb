class TradesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response

  def show
    trade = Trade.find( params[:id] )
    if trade 
      render json: trade, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
    else 
      render json: {errors: "artwork does not exist"}, status: :unprocessable_entity
    end
  end

  def index 
    trades = Trade.all
    render json: trades, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])  
      if user
          new_trade = Trade.new( trade_params )
          if new_trade.save
              render json: new_trade, status: :created
          else
              render json: { errors: new_trade.errors.full_messages }, status: :unprocessable_entity
          end
      else 
          puts "gotta log in for that!"
          render json: { errors: ["must login"] }, status: :unauthorized
      end
  end

  def destroy
    user = User.find_by(id: session[:user_id])  
    if user
        Trade.destroy( params[:id] )
        head :no_content
      else 
        render json: { errors: [ 'gotta be logged in to do that' ] }, status: :unauthorized
    end
  end

  private 

  def trade_params 
    params.permit( :trader_id, :trader_art_id, :vendor_id, :vendor_art_id, :trader_note, :completed, :completed_date )
  end

  def render_not_found_response 
    render json: { errors: 'not_found' }, status: :unauthorized
  end



end
