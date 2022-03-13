class User < ApplicationRecord
has_secure_password

has_many :artworks
has_many :sent_trades, foreign_key: :trader_id, class_name: "Trade"
has_many :received_trades, foreign_key: :vendor_id, class_name: "Trade"

end
