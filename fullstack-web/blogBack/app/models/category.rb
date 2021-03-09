class Category < ApplicationRecord
  has_many :posts, :dependent => :delete_all
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
