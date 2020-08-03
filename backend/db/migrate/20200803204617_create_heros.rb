class CreateHeros < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |t|
      t.string :name
      t.string :super_name
      t.references :power, null: false, foreign_key: true

      t.timestamps
    end
  end
end
