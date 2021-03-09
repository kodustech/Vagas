#Blog Project

This project consists of two applications, an ruby on rails api that offers
services that execute CRUD operation over two entities Categories and Posts.
Theses services are then consumed by an angular front end web application,
that provides an interface that allows an user to manage this two entities.
## Getting Started
By cloning this repository you can access the  fullstack-web folder where
folders containing the two applications will be ("blogBack" for the back-end
application and "blog-front" fro the front-end). 

### Prerequisites
```
Rails 6.1.3
Angular CLI: 11.2.3
Node: 10.19.0
mysql  Ver 8.0.23
```

### Installing

To install the back-end dependencies access "blogBack" and run

```
gem install bundler
bundle install
```

To install the front-end dependencies access "blogBack" and run

```
npm install
```

### Configuring
For blogBack you will need to configure your mysql connection, run:
```
EDITOR=nano rails credentials:edit 
```
to edit your mysql credentials, under development and test password
put the password of your mysql root user

## Running the tests

To run the back-end tests run the command

```
rspec
```
in the root of blogBack folder. These tests will test Categories and Posts models and their controllers.

## Running the application locally

For the back-end run
```
 rails s
```
in the blogBack folder. For the front-end run:
```
npm start
```
The back application will be running at
http://localhost:3000/, while the front
application will be running at http://localhost:4200/.
For the back-end the command
```
rails routes
```
will show the application Categories and Posts available routes.
