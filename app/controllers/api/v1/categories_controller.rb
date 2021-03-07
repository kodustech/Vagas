module Api
  module V1
    class CategoriesController < ApplicationController

      def index
        categories = Category.order('created_at DESC')
        render json: { data: categories }, status: :ok
      end

      def show
        category = Category.find(params[:id])
        render json: { data: category }, status: :ok
      end

      def create
        category = Category.new(category_params)
        if category.save
          render json: { status: 'Success!', message: 'Saved Category', data: category }, status: :created
        else
          render json: { data: category.errors }, status: :unprocessable_entity
        end
      end

      def update
        category = Category.find(params[:id])
        if category.update_attributes(category_params)
          render json: { status: 'Success!', message: 'Updated Category', data: category },
                 status: :ok
        else
          render json: { data: category.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        category = Category.find(params[:id])
        if category.destroy
          head :ok
        else
          render json: category.errors, status: :unprocessable_entity
        end
      end

      private

      def category_params
        params.permit(:name)
      end
    end
  end
end
