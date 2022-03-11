class Artwork < ApplicationRecord
belongs_to :user

has_many :sent_offers, foreign_key: :trader_art_id, class_name: "Trade"
has_many :received_offers, foreign_key: :vendor_art_id, class_name: "Trade"

validates :title, presence: true
validates :year, presence: true
validates :size, presence: true
validates :url, presence: true
validates :url, format: URI::regexp(%w[http https])


end
