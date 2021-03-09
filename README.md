## Teste: desafio Back-end

- Banco de Dados: Postgresql
- Ruby Version: Ruby 2.6.1p3
- Rails Version: Rails 6.0.3.5
- Postman 

O Sistema se encontra no heroku, já com alguns dados adicionados.

### Listagem dos Endpoints

1. Listar Posts - https://challegejr-backend.herokuapp.com/api/v1/posts"

2. Exibir post - https://challegejr-backend.herokuapp.com/api/v1/posts/:id

3. Criar post - curl -X POST \
  https://challegejr-backend.herokuapp.com/api/v1/posts \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 71375b95-129c-1326-be60-7ff3ad7795fc' \
  -d '{
   "title": "Lorem9",
   "body":"Loremipsulisulm",
   "posted_at": "2021-03-08 14:10:41",
   "category_id":"2"
}'
4. Atualizar post - curl -X PUT \
  https://challegejr-backend.herokuapp.com/api/v1/posts/4 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 95f06510-6737-393b-c7b3-e5578cd32e0c' \
  -d '{
   "title": "LoremQuatro",
   "body":"Loremipsulisulm",
   "posted_at": "2021-03-08 14:10:41",
   "category_id":"2"
}'
5. Deletar post - curl -X DELETE \
  https://challegejr-backend.herokuapp.com/api/v1/posts/4 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9e60f8ce-6189-1be8-3542-e1d182b79be8' \
  -d '{
   "title": "LoremQuatro",
   "body":"Loremipsulisulm",
   "posted_at": "2021-03-08 14:10:41",
   "category_id":"2"
}'


6. Listar categories - https://challegejr-backend.herokuapp.com/api/v1/categories

7. Exibir category - https://challegejr-backend.herokuapp.com/api/v1/categories/:id

8. Criar category - curl -X POST \
  https://challegejr-backend.herokuapp.com/api/v1/categories \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 749526e1-7227-12bb-f28e-39bfcd86349c' \
  -d '{
   "name":"Categoria6"
}'
9. Atualizar category - curl -X PUT \
  https://challegejr-backend.herokuapp.com/api/v1/categories/2 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c7e67287-a1ff-1d07-b611-44f13838aae1' \
  -d '{
   "name":"CategoriaAtualizada2"
}'
10. Deletar category - curl -X DELETE \
  https://challegejr-backend.herokuapp.com/api/v1/categories/7 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 578268e0-d050-48b7-680e-cd4c30a049c3' \
  -d '{
   "name":"Categoria7"
}'

### Listagem dos Filtros

1. Listar category_id - curl -X GET \
  'https://challegejr-backend.herokuapp.com/api/v1/posts?category_id=2' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 80da0397-f7ec-c6f2-9674-0200711eb440' \
  -d '{
   "name":"Categoria7"
}'

2. Listar category_name - curl -X GET \
  'https://challegejr-backend.herokuapp.com/api/v1/posts?category_name=categoriaat' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 501f1515-df3a-e50b-78e9-440107fb29af' \
  -d '{
   "name":"Categoria7"
}'


3. Listar data/hora, retorna valores antes da data/hora que foi buscada - curl -X GET \
  'https://challegejr-backend.herokuapp.com/api/v1/posts?posted_after=2021-03-10%2005%3A37%24' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fec738d2-babd-9506-b8fe-e9bc664cf24a' \
  -d '{
   "name":"Categoria7"
}'

4. Listar data/hora, retorna valores depois da data/hora que foi buscada - curl -X GET \
  'https://challegejr-backend.herokuapp.com/api/v1/posts?posted_before=2021-03-11%2005%3A37%24' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ec2c2d81-ece4-2627-6664-a678fba4255e' \
  -d '{
   "name":"Categoria7"
}'

5. Listar data/hora, retorna valores que estariam entre as datas que foram inseridas - curl -X GET \
  'https://challegejr-backend.herokuapp.com/api/v1/posts?posted_before=2021-03-11%2006%3A31%3A52&posted_after=2021-03-05%2006%3A31%3A52' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 031e0d64-e4fd-9927-72ab-1befb2f0ad59' \
  -d '{
   "name":"Categoria7"
}'















