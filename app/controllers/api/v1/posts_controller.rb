class Api::V1::PostsController < Api::V1::ApiController

  before_action :set_post, only: %i[show update destroy]

  def index
    @posts = Post.filter(filtering_params).sorted_by_desc
    render json: @posts
    
  end

  def show
    post = Post.find(params[:id])
    render json: post, status: :ok
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post , status: :created
    else
      render json: post.errors , status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update_attributes(post_params)
      render json: post , status: :ok
    else
      render json: post.errors , status: :unprocessable_entity
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
  
  def set_post
    post = Post.find(params[:id])
  end

  def filtering_params
    params.slice(:category_name, :category_id, :posted_after, :posted_before)
  end

  def post_params
    params.permit(:title, :body, :posted_at, :category_id)
  end
end
