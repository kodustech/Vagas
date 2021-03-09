require 'rails_helper'

RSpec.describe "Posts", type: :request do

  describe "GET /index" do
    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      @category2 = Category.create(name: "category2", description: "category2 description")
      post1 = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
      post2 = Post.create(title: "post2", text: "post2 text", category_id: @category2.id)
      post3 = Post.create(title: "post3", text: "post3 text", category_id: @category1.id)
      get '/api/v1/posts'
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains posts attributes from database" do
      data = JSON.parse(response.body)["data"]
      expect(data).to have_attributes(size: 3)
      expect(data.map{|post| post["title"]}).to contain_exactly("post1", "post2", "post3")
      expect(data.map{|post| post["text"]}).to contain_exactly("post1 text", "post2 text", "post3 text")
      expect(data.map{|post| post["category_id"]}).to contain_exactly(@category1.id, @category2.id, @category1.id)
    end

  end

  describe "GET /show" do

    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      post1 = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
      post2 = Post.create(title: "post2", text: "post2 text", category_id: @category1.id)
      get '/api/v1/posts/' + post1.id.to_s
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains the post of the chosen id" do
      data = JSON.parse(response.body)["data"]
      expect(data["title"]).to eq("post1")
      expect(data["text"]).to eq("post1 text")
      expect(data["category_id"]).to eq(@category1.id)
    end

  end

  describe "DELETE /destroy" do

    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      post1 = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
      @post2 = Post.create(title: "post2", text: "post2 text", category_id: @category1.id)
      delete '/api/v1/posts/' + post1.id.to_s
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "removes the chosen id post from the database" do
      expect{
        delete '/api/v1/posts/' + @post2.id.to_s
      }.to change(Post, :count).by(-1)
    end

  end

  describe "Post /create" do

    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
    end

    it "return http success with the created category when its attributes are correct" do
      post '/api/v1/posts', params: { post: {title: 'post1', text: 'post1 text', category_id: @category1.id }}
      data = JSON.parse(response.body)["data"]
      expect(response).to have_http_status(:success)
      expect(data["title"]).to eq("post1")
      expect(data["text"]).to eq("post1 text")
      expect(data["category_id"]).to eq(@category1.id)
    end

    it "return http unprocessable_entity with the failed operations errors when the operation attributes are incorrect" do
      post '/api/v1/posts', params: { post: {title: 'post2' }}
      expect(response).to have_http_status(:unprocessable_entity)
      data = JSON.parse(response.body)["data"]
      expect(data["text"]).to eq(["can't be blank"])
      expect(data["category"]).to eq(["must exist"])
    end

  end

  describe "Put /update" do

    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      @category2 = Category.create(name: "category2", description: "category2 description")
      @post = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
    end

    it "return http success with the created category when its attributes are correct" do
      put '/api/v1/posts/' + @post.id.to_s, params: { post: {title: 'post2', text: 'post2 text', category_id: @category2.id }}
      data = JSON.parse(response.body)["data"]
      expect(response).to have_http_status(:success)
      expect(data["title"]).to eq("post2")
      expect(data["text"]).to eq("post2 text")
      expect(data["category_id"]).to eq(@category2.id)
    end

    it "return http unprocessable_entity with the failed operations errors when the operation attributes are incorrect" do
      put '/api/v1/posts/' + @post.id.to_s, params: { post: {title: nil }}
      expect(response).to have_http_status(:unprocessable_entity)
      data = JSON.parse(response.body)["data"]
      expect(data["title"]).to eq(["can't be blank"])
    end

  end

  describe "GET /recoverPostsByCategory" do
    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      @category2 = Category.create(name: "category2", description: "category2 description")
      post1 = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
      post2 = Post.create(title: "post2", text: "post2 text", category_id: @category2.id)
      post3 = Post.create(title: "post3", text: "post3 text", category_id: @category1.id)
      get '/api/v1/posts/category/' + @category1.id.to_s
    end

    it "return http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains posts attributes from database" do
      data = JSON.parse(response.body)["data"]
      expect(data).to have_attributes(size: 2)
      expect(data.map{|post| post["title"]}).to contain_exactly("post1", "post3")
      expect(data.map{|post| post["text"]}).to contain_exactly("post1 text", "post3 text")
      expect(data.map{|post| post["category_id"]}).to contain_exactly(@category1.id,  @category1.id)
    end
  end

  describe "GET /recoverPostsByDate" do
    before do
      Category.delete_all
      Post.delete_all
      @category1 = Category.create(name: "category1", description: "category1 description")
      @category2 = Category.create(name: "category2", description: "category2 description")
      post1 = Post.create(title: "post1", text: "post1 text", category_id: @category1.id)
      post2 = Post.create(title: "post2", text: "post2 text", category_id: @category2.id)
      post3 = Post.create(title: "post3", text: "post3 text", category_id: @category1.id)
    end


    it "JSON body response contains posts attributes from database from the date and returns a http success" do
      get '/api/v1/posts/date/' + Date.current().to_s
      expect(response).to have_http_status(:success)
      data = JSON.parse(response.body)["data"]
      expect(data).to have_attributes(size: 3)
      expect(data.map{|post| post["title"]}).to contain_exactly("post1", "post2", "post3")
      expect(data.map{|post| post["text"]}).to contain_exactly("post1 text", "post2 text", "post3 text")
      expect(data.map{|post| post["category_id"]}).to contain_exactly(@category1.id, @category2.id, @category1.id)
    end

    it "JSON body response contains posts attributes from database from the date and returns a http success" do
      get '/api/v1/posts/date/' + Date.tomorrow().to_s
      expect(response).to have_http_status(:success)
      data = JSON.parse(response.body)["data"]
      expect(data).to have_attributes(size: 0)
    end
  end

end
