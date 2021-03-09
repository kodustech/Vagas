class Post < ApplicationRecord

  belongs_to :category
  validates :title, presence: true, uniqueness: true
  validates :text, presence: true

end
