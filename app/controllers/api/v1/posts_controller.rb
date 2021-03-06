class Api::V1::PostsController < ApplicationController
 

 before_action :set_post, only: [:create, :index, :update, :destroy]

 # GET /api/v1/posts

 def index

   render json: Post.all

 end

 # GET /api/v1/posts/1

 def show

   render json: @posts

 end

 # POST /api/v1/posts

 def create

   post = Post.new(post_params)

    if post.save
      render json: post
    else
      render json: @post.errors, status: :unprocessable_entity
    end

 end

 # PATCH/PUT /api/v1/posts/1

 def update

   if @post.update(post_params)

     render json: @post

   else

     render json: @post.errors, status: :unprocessable_entity

   end

 end

 # DELETE /api/v1/posts/1

 def destroy

   @post.destroy

 end

 private


   def set_post

     @post = Post.find(params[:id])

   end


   def post_params

     params.require(:post).permit(:title, :body, :posted_at, :category_id)

   end

end
