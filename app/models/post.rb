class Post < ApplicationRecord
  belongs_to :category
  
  scope :filter_by_category, ->(category_id) { where category_id: category_id }

end
