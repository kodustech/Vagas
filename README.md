## Teste: desafio Back-end

- Banco de Dados: postgresql
- Ruby Version: Ruby 2.6.1p3
- Rails Version: Rails 6.0.3.5


O Sistema se encontra no heroku, já com alguns dados já adicionados, utilizei Postman para ir testando a API.

O link para acesso as categorias (index) > https://challegejr-backend.herokuapp.com/api/v1/categories

O link para acesso aos posts (index) > https://challegejr-backend.herokuapp.com/api/v1/posts

Segue o link a baixo, dos filtros que foram feitos

Filtro para buscar o id de category > https://challegejr-backend.herokuapp.com/api/v1/posts?category_id=2

Filtro para buscar o name de category > https://challegejr-backend.herokuapp.com/api/v1/posts?category_name=Categoria2

Filtro para buscar a data/hora, busca valores que estariam depois dessa data caso exista  > https://challegejr-backend.herokuapp.com/api/v1/posts?posted_after=2021-03-11%2005:37$

Filtro para buscar a data/hora, busca valores que estariam antes dessa data caso exista > https://challegejr-backend.herokuapp.com/api/v1/posts?posted_before=2021-03-11%2005:37$

Filtro para buscar a data/hora, busca valores que estariam entre as datas > https://challegejr-backend.herokuapp.com/api/v1/posts?posted_before=2021-03-11%2006:31:52&posted_after=2021-03-05%2006:31:52
