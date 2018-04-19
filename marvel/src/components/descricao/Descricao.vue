<template>
  <div>
    
    <cabecalho>
      <titulo></titulo>
    </cabecalho>

    <div class="descricao container">

        <h1>{{name}}</h1>
        <div class="row">
            <img :src="url" class="foto">
            <span class="texto">{{description}}<span v-if="(description == ' ')" >No description available</span></span>
        </div>

        <router-link :to="{ name: 'Home'}">
            <button class="btn btn-default">Voltar</button>
        </router-link>

    </div>
  
  </div>

</template>

<script>
import Cabecalho from '../shared/cabecalho/Cabecalho.vue';
import Titulo from '../shared/titulo/Titulo.vue';

export default {

  components: {
    'cabecalho' : Cabecalho,
    'titulo' : Titulo
  },

  data () {
    return {
      herois: [],
      name: this.$route.params.name,
      description: this.$route.params.description,
      url: this.$route.params.url
    }
  }
}  

</script>

<style>

.descricao {
    padding-top: 150px;
}

.foto {
    border: 2px solid black;
    border-radius: 10px;
    list-style: none;
    margin: 20px;
    padding: 10px;
    max-width: 250px;
    float: left;
}

.texto {
    border-top: 2px solid black;
    width: 100%;
    list-style: none;
    margin: 20px;
    padding: 30px;
    max-width: 800px;
    float: left;
    text-indent: 50px;
    text-align: justify;
    font-size: 20px;
}

.btn {
    margin-top: 15px;
    padding: 5px 25px;
}

</style>

