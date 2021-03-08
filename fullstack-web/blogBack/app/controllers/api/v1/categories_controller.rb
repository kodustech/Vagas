
module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :set_category, only: [:show, :update, :destroy]

      def index
        categories = Category.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Categorias carregadas', data:categories},status: :ok
      end

      def show
        render json: {status: 'SUCCESS', message:'Categoria carregada', data:@category }
      end

      private

      def category_params
        params.require(:category).permit(:name, :description)
      end

      def set_category
        @category = Category.find(params[:id])
      end

    end
  end
end