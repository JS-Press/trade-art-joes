class User < ApplicationRecord
has_secure_password
has_many :artworks

# has_many :trade_artworks via
# has_many :vend_artworks via
# has_many :sent_trades via
# has_many :received_trades via

end
