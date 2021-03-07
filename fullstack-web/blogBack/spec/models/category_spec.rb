require 'rails_helper'

RSpec.describe Category, type: :model do
  it "is valid with valid attributes" do
    expect(Category.new(name: "Esportes", description: "Blogs que visam discutir os mais diversos topicos esportivos")).to be_valid
  end

  it "is not valid without a name" do
    expect(Category.new(description: "Blogs que visam discutir os mais diversos topicos esportivos")).to_not be_valid
  end

  it "is not valid without a description" do
    expect(Category.new(name: "Esportes")).to_not be_valid
  end
end
