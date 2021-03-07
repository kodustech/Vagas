class Api::V1::PostsController < ApplicationController

  def index
    posts = Post.order('created_at DESC')
    render json: { data: posts }, status: :ok
  end

  def show
    post = Post.find(params[:id])
    render json: { data: post }, status: :ok
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: { status: 'Success!', message: 'Saved Post', data: post }, status: :created
    else
      render json: { data: post.errors }, status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update_attributes(post_params)
      render json: { status: 'Success!', message: 'Updated Post', data: post }, status: :ok
    else
      render json: { data: post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      head :ok
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:title, :body, :posted_at, :category_id)
  end
end
