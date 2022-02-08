class CreateTrades < ActiveRecord::Migration[6.1]
  def change
    create_table :trades do |t|
      t.integer :trader_id
      t.integer :trader_art_id
      t.string :trader_note
      t.integer :vendor_id
      t.integer :vendor_art_id
      t.boolean :completed
      t.datetime :completed_date

      t.timestamps
    end
  end
end
