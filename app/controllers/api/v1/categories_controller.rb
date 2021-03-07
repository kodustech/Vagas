module Api
	module V1
		class CategoriesController < ApplicationController
      			
			# Listar todos os artigos
			def index
				categories = Category.order('created_at DESC');
				render json: {status: 'Success!', message:'Categories loaded', data:categories},status: :ok
			end

            def show
				category = Category.find(params[:id])
				render json: {status: 'Success!', message:'Category loaded', data:category},status: :ok
			end

            def create
				category = Category.new(category_params)
				if category.save
					render json: {status: 'Success!', message:'Saved Category', data:category},status: :ok
				else
					render json: {status: 'Error', message:'Categories not saved', data:category.erros},status: :unprocessable_entity
				end
			end

            def update
				category = Category.find(params[:id])
				if category.update_attributes(category_params)
					render json: {status: 'Success!', message:'Updated Category', data:category},status: :ok
				else
					render json: {status: 'Error', message:'Categories not update', data:category.erros},status: :unprocessable_entity
				end
			end

            def destroy
				category = Category.find(params[:id])
				category.destroy
				render json: {status: 'Success!', message:'Deleted category', data:category},status: :ok
			end

            private
			def category_params
				params.permit(:name)
			end
		end
	end
end