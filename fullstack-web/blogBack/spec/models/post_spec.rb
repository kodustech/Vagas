require 'rails_helper'

RSpec.describe Post, type: :model do

  before do
    Category.delete_all
  end

  it "it's valid with valid attributes" do
    category = Category.create(name: "Esportes", description: "Blogs que visam discutir os mais diversos topicos esportivos")
    expect(Post.new(title: "Perfomace da selecao na copa", text: "Eu acho que a performace da selecao foi ...", category_id: category.id)).to be_valid
  end

  it "it is not valid without a title" do
    category = Category.create(name: "Esportes", description: "Blogs que visam discutir os mais diversos topicos esportivos")
    expect(Post.new(text: "Eu acho que a performace da selecao foi ...", category_id: category.id)).to_not be_valid
  end

  it "it is not valid without a text" do
    category = Category.create(name: "Esportes", description: "Blogs que visam discutir os mais diversos topicos esportivos")
    expect(Post.new(title: "Perfomace da selecao na copa", category_id: category.id)).to_not be_valid
  end

  it "it is not valid without category_id" do
    expect(Post.new(title: "Perfomace da selecao na copa", text: "Eu acho que a performace da selecao foi ...")).to_not be_valid
  end

end
