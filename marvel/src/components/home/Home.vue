<template>
  <div>
    
    <cabecalho>
      <titulo></titulo>
      <input type="search" class="filtro navbar-right" @input="filtro = $event.target.value" placeholder="Procure seu herói por aqui!">
    </cabecalho>
      
    <ul class="lista-herois">
      <li v-for="heroi of heroisComFiltro">
        
        <router-link :to="{ name : 'Descricao', params: { name: heroi.name, description: heroi.description + ' ', url: heroi.thumbnail.path + '/portrait_incredible.' + heroi.thumbnail.extension }} 
        || { name : 'DescricaoVazia', params: { name: heroi.name, url: heroi.thumbnail.path + '/portrait_incredible.' + heroi.thumbnail.extension }}">
          <bloco :url="heroi.thumbnail.path" :extension="heroi.thumbnail.extension" :name="heroi.name" @click.native="descricao(heroi)"></bloco>
        </router-link>
      
      </li>
    </ul>

    <div class="aviso">
      <p v-if="filtro">Se o herói procurado não aparecer verifique a ortografia ou tente recarregar a página!</p>
      <p>{{direitos}}</p>
    </div>

  </div>

</template>

<script>
import Bloco from '../shared/bloco/Bloco.vue';
import Cabecalho from '../shared/cabecalho/Cabecalho.vue';
import Titulo from '../shared/titulo/Titulo.vue';

export default {

  components: {
    'bloco' : Bloco,
    'cabecalho' : Cabecalho,
    'titulo' : Titulo
  },

  data () {
    return {
      herois: [],
      filtro: Cabecalho.filtro,
      direitos: ''
    }
  },

  computed: {

    heroisComFiltro(){
      
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.herois.filter(heroi => exp.test(heroi.name));
      } else{
          return this.herois;
      }
    }
  },

  created() {

    let promise = this.$http.get('http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=1cb99d17d173e2a87bd5e00b72f5a73e&hash=fbaa495d40b6166442a9ccfc92bf3220');
    promise.then(res => {
      console.log(res.json());
      this.herois = res.data.data.results;
      this.direitos = res.data.attributionText;
      console.log(this.direitos)
      console.log(this.herois)
    });
    
    for(var i = 1; i <= 14; i++){
    let promise1 = this.$http.get('http://gateway.marvel.com/v1/public/characters?limit=100&offset=' + i + '01&ts=1&apikey=1cb99d17d173e2a87bd5e00b72f5a73e&hash=fbaa495d40b6166442a9ccfc92bf3220');
    promise1.then(res => {
      console.log(res.json());
      this.herois = this.herois.concat(res.data.data.results);
      console.log(this.herois)
    }); 
    }   
  },

  methods: {

        descricao(heroi){
            
        }
    }
}

</script>

<style>

.filtro {
  display: block;
  width: 40%;
  padding-left: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 3px solid black;
  border-radius: 10px;
}

.lista-herois{
  margin-top: 90px;
}

.aviso {
  margin-top: 50px;
  bottom: 0;
  font-size: 20px;
}

</style>

