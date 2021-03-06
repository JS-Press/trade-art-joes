class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.string :bio
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip
      t.string :website
      t.string :profile_pic

      t.timestamps
    end
  end
end
