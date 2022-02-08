class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.integer :year
      t.string :description
      t.string :size
      t.string :tags
      t.boolean :available
      t.integer :user_id

      t.timestamps
    end
  end
end
