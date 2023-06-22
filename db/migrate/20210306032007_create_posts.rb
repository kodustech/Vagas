class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.datetime :posted_at
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
