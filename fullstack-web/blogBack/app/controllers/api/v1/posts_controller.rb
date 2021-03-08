module Api
  module V1
    class PostsController < ApplicationController

      def index
        posts = Post.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Posts carregados', data:posts},status: :ok
      end

    end
  end
end

