class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :topic
      t.text :description
      t.string :address
      t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
