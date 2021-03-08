require 'rails_helper'
RSpec.describe Api::V1::PostsController do
  describe "GET #index" do
    before do
      get :index
    end
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    it "JSON body response contains expected recipe attributes" do
      json_response = JSON.parse(response.body)
      expect(hash_body.keys).to match_array([:id, :title, :body, :posted_at, :category_id])
    end
  end
end