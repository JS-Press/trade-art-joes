class TradesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response

  def show
    trade = Trade.find( params[:id] )
    if trade 
      render json: trade, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
    else 
      render json: {errors: "does not exist"}, status: :unprocessable_entity
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

  def update 
    user = User.find_by(id: session[:user_id])  
    if user
        trade = Trade.find_by(id: params[:id])
        trade.completed = true
        if trade.save
          trade.trader_art.available = false
          trade.vendor_art.available = false
          trade.trader_art.sent_offers.each(&:destroy)
          trade.trader_art.received_offers.each(&:destroy)
          trade.vendor_art.sent_offers.each(&:destroy)
          trade.vendor_art.received_offers.each(&:destroy)
          render json: Trade.all, include: [:trader, :trader_art, :vendor, :vendor_art], status: :created
        else
            render json: { errors: "trade not able to confirm."}, status: :unprocessable_entity
        end
    else 
        render json: { errors: ["must login"] }, status: :unauthorized
    end
end

  def destroy
    user = User.find_by(id: session[:user_id])  
    if user
      trade = Trade.find( params[:id] )
      if trade 
        Trade.destroy( params[:id] )
        render json: Trade.all, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
      else 
        render json: {errors: "trade does not exist."}, status: :unprocessable_entity
      end
    else
      puts "need to be logged in sorry"
      render json: { errors: ["must login"] }, status: :unauthorized
    end
  end

  def sent 
    user = User.find(params[:id]) 
    userTrades = user.sent_trades.select { |t| t.completed === false }
    render json: userTrades, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
  end

  def received
    user = User.find(params[:id])  
    userTrades = user.received_trades.select { |t| t.completed === false }
    render json: userTrades, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
  end

  def completed
    user = User.find(params[:id])
    # user = User.find_by(id: session[:user_id])  
    # userTrades = user.sent_trades.concat user.received_trades
    completedTrades = user.sent_trades.select { |t| t.completed }
    completedTrades += user.received_trades.select { |t| t.completed }
    render json: completedTrades, include: [:trader, :trader_art, :vendor, :vendor_art], status: :ok
  end

  private 

  def trade_params 
    params.permit( :trader_id, :trader_art_id, :vendor_id, :vendor_art_id, :trader_note, :completed, :completed_date )
  end

  def render_not_found_response 
    render json: { errors: 'not_found' }, status: :unauthorized
  end



end
