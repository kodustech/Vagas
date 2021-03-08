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

      def destroy
        @post.destroy
        render json: {status: 'SUCCESS', message:'Post deletado'}, status: :ok
      end

      def create
        @post = Post.new(post_params)
        if @post.save
          render json: {status: 'SUCCESS', message:'Post criada', data: @post}, status: :ok
        else
          render json: {status: :unprocessable_entity, message: 'Falha na criacao da post', data: @post.errors},status: :unprocessable_entity
        end
      end

      def update
        if @post.update(post_params)
          render json: {status: 'SUCCESS', message:'Post atualizado', data: @post}, status: :ok
        else
          render json: {status: :unprocessable_entity, message: 'Falha na atualizacao da post', data: @post.errors},status: :unprocessable_entity
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :text, :category_id)
      end

    end
  end
end

