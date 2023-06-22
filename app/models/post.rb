class Post < ApplicationRecord
  include Filterable
  belongs_to :category
  scope :sorted_by_desc, -> { order('created_at DESC') }

  scope :filter_by_category_name, ->(name) { joins(:category).where("categories.name ILIKE '%#{name}%'") }
  scope :filter_by_category_id, ->(category_id) { (where category_id: category_id) }
  scope :filter_by_posted_after, ->(date_time) { where('posted_at > ?', date_time) }
  scope :filter_by_posted_before, ->(date_time) { where('posted_at <= ?', date_time) }
end
