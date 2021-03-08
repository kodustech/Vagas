Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :categories
      resources :posts
      get '/category/posts/:category_id', to: 'posts#recoverPostsByCategory'
    end
  end
end
