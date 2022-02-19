class Trade < ApplicationRecord

belongs_to :trader, foreign_key: :trader_id, class_name: "User"
belongs_to :vendor, foreign_key: :vendor_id, class_name: "User"
belongs_to :trader_art, foreign_key: :trader_art_id, class_name: "Artwork"
belongs_to :vendor_art, foreign_key: :vendor_art_id, class_name: "Artwork"

end
