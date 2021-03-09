3.times do |i|
  Category.create!(name: "Categoria#{i}")
end

3.times do |i|
  Post.create!(title: "Título ..#{i}", body: 'Sobre...', posted_at: DateTime.now + 1.day, category_id: rand(1..3))
end
