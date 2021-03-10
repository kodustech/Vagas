require 'rails_helper'

RSpec.describe Api::V1::PostsController, type: :routing do
  it { should route(:get, '/api/v1/posts').to(action: :index) }
  it { should route(:get, '/api/v1/posts/1').to(action: :show, id: 1) }
  it { should route(:post, '/api/v1/posts').to(action: :create) }
  it { should route(:put, '/api/v1/posts/1').to(action: :update, id: 1) }
  it { should route(:patch, '/api/v1/posts/1').to(action: :update, id: 1) }
  it { should route(:delete, '/api/v1/posts/1').to(action: :destroy, id: 1) }
end

