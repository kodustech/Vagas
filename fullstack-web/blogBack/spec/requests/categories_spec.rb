require 'rails_helper'

RSpec.describe "Categories", type: :request do

  describe "GET /index" do

    before do
      Category.delete_all
      Category.create!(name: "category1", description: "category1 description")
      Category.create!(name: "category2", description: "category2 description")
      Category.create!(name: "category3", description: "category3 description")
      get '/api/v1/categories'
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains categories attributes from database" do
      data = JSON.parse(response.body)["data"]
      expect(data).to have_attributes(size: 3)
      expect(data.map{|category| category["name"]}).to contain_exactly("category1", "category2", "category3")
      expect(data.map{|category| category["description"]}).to contain_exactly("category1 description", "category2 description", "category3 description")
    end

  end

  describe "Get /show" do

    before do
      Category.delete_all
      category1 = Category.create!(name: "category1", description: "category1 description")
      category2 = Category.create!(name: "category2", description: "category2 description")
      get '/api/v1/categories/' + category1.id.to_s
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains the category of the chosen id" do
      data = JSON.parse(response.body)["data"]
      expect(data["name"]).to eq("category1")
      expect(data["description"]).to eq("category1 description")
    end

  end

  describe "Delete /destroy" do

    before do
      Category.delete_all
      @category1 = Category.create!(name: "category1", description: "category1 description")
      @category2 = Category.create!(name: "category2", description: "category2 description")
      delete '/api/v1/categories/' + @category1.id.to_s
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "removes the chosen id category from the database" do
      expect{
        delete '/api/v1/categories/' + @category2.id.to_s
      }.to change(Category, :count).by(-1)
    end

  end

  describe "Post /create" do

    before do
      Category.delete_all
    end

    it "return http success with the created category when its attributes are correct" do
      post '/api/v1/categories', params: { category: {name: 'category1', description: 'category1 description' }}
      data = JSON.parse(response.body)["data"]
      expect(response).to have_http_status(:success)
      expect(data["name"]).to eq("category1")
      expect(data["description"]).to eq("category1 description")
    end

    it "return http unprocessable_entity with the failed operations errors when the operation attributes are incorrect" do
      post '/api/v1/categories', params: { category: {name: 'category2' }}
      expect(response).to have_http_status(:unprocessable_entity)
      data = JSON.parse(response.body)["data"]
      expect(data["description"]).to eq(["can't be blank"])
    end

  end

  describe "Put /update" do

    before do
      Category.delete_all
      @category = Category.create!(name: "category1", description: "category1 description")
    end

    it "return http success with the created category when its attributes are correct" do
      put '/api/v1/categories/' + @category.id.to_s, params: { category: {name: 'category2', description: 'category2 description' }}
      data = JSON.parse(response.body)["data"]
      expect(response).to have_http_status(:success)
      expect(data["name"]).to eq("category2")
      expect(data["description"]).to eq("category2 description")
    end

    it "return http unprocessable_entity with the failed operations errors when the operation attributes are incorrect" do
      put '/api/v1/categories/' + @category.id.to_s, params: { category: {name: nil }}
      expect(response).to have_http_status(:unprocessable_entity)
      data = JSON.parse(response.body)["data"]
      expect(data["name"]).to eq(["can't be blank"])
    end

  end

end
