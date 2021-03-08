module Api
  module V1
    class PostsController < ApplicationController

      before_action :set_post, only: [:show, :update, :destroy]

      def index
        posts = Post.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Posts carregados', data:posts},status: :ok
      end

      def show
        render json: {status: 'SUCCESS', message:'Post carregado', data: @post},status: :ok
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

    end
  end
end

