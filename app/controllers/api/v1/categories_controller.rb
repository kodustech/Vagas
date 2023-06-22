class Api::V1::CategoriesController < Api::V1::ApiController

  def index
        @categories = Category.all.sorted_by_desc

        render json: @categories
      end

      def show
        category = Category.find(params[:id])
        render json: { data: category }, status: :ok
      end

      def create
        category = Category.new(category_params)
        if category.save
          render json: category , status: :created
        else
          render json: category.errors, status: :unprocessable_entity
        end
      end

      def update
        category = Category.find(params[:id])
        if category.update_attributes(category_params)
          render json: category, status: :ok
        else
          render json: category.errors, status: :unprocessable_entity
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
