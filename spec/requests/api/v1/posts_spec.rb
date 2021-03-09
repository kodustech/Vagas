require 'rails_helper'

 RSpec.describe "Posts", type: :request do

      describe "GET posts#index" do
        it "should get index" do
          get '/api/v1/posts'
          expect(response).to have_http_status(200)
        end
      end
      describe "POST posts#create" do
      it 'create post with valid attributes' do
        post_params = { post: {
          title: 'Lorem',
          body: 'Loremipsum',
          posted_at: '2021-03-08 14:10:41',
          category: :category_id
         }}
         post '/api/v1/posts', :params => post_params.to_json, :headers => { "Content-Type": "application/json" }
        json = JSON.parse(response.body)             
      end
    end

end
    
  