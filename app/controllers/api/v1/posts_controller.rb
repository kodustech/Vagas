class Api::V1::PostsController < ApplicationController
      			
			# Listar todos os posts
			def index
				posts = Post.order('created_at DESC');
				render json: {status: 'Success!', message:'Posts loaded', data:posts},status: :ok
			end

        	def show
				post = Post.find(params[:id])
				render json: {status: 'Success!', message:'Post loaded', data:post},status: :ok
			end

            def create
				post = Post.new(post_params)
				if post.save
					render json: {status: 'Success!', message:'Saved Post', data:post},status: :ok
				else
					render json: {status: 'Error', message:'Posts not saved', data:post.erros},status: :unprocessable_entity
				end
			end

            def update
				post = Post.find(params[:id])
				if post.update_attributes(post_params)
					render json: {status: 'Success!', message:'Updated Post', data:post},status: :ok
				else
					render json: {status: 'Error', message:'Posts not update', data:post.erros},status: :unprocessable_entity
				end
			end

            def destroy
				post = Post.find(params[:id])
				post.destroy
				render json: {status: 'Success!', message:'Deleted post', data:post},status: :ok
			end
			# Parametros aceitos
			private
			def post_params
				params.permit(:title, :body, :posted_at, :category_id)
			end
      
end
