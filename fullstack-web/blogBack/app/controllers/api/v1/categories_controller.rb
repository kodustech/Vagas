
module Api
  module V1
    class CategoriesController < ApplicationController

      def index
        categories = Category.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Categorias carregadas', data:categories},status: :ok
      end

    end
  end
end