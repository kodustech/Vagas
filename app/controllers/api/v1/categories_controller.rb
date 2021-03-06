class Api::V1::CategoriesController < ApplicationController
     before_action :set_category, only: [:create, :index, :update, :destroy]

 # GET /api/v1/categories

 def index

   render json: Category.all

 end

 # GET /api/v1/categories/1

 def show

   render json: @categories

 end

 # Category /api/v1/categories

 def create

   category = Category.new(category_params)

    if category.save
      render json: category
    else
      render json: @category.errors, status: :unprocessable_entity
    end

 end

 # PATCH/PUT /api/v1/categories/1

 def update

   if @category.update(category_params)

     render json: @category

   else

     render json: @category.errors, status: :unprocessable_entity

   end

 end

 # DELETE /api/v1/categories/1

 def destroy

   @category.destroy

 end

 private


   def set_category

     @category = Category.find(params[:id])

   end


   def category_params

     params.require(:category).permit(:name)

   end
end
