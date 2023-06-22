class Category < ApplicationRecord
  has_many :posts

  scope :sorted_by_desc, -> { order('created_at DESC') }
end
