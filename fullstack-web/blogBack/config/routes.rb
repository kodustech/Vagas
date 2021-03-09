Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :categories
      resources :posts
      get '/posts/category/:category_id', to: 'posts#recoverPostsByCategory'
      get '/posts/date/:date', to: 'posts#recoverPostsByDate'
    end
  end
end
