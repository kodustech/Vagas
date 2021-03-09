class AddCategoryAssociationWithPost < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :category, foreign_key: true
  end
end
