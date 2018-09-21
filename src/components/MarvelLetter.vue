<template>
<div id="marvel">
  <div class="wrapper">
      <div class="search-wrapper">
        <input class="search" type="text" v-model="search" placeholder="Buscar Heroi"/><br />
      </div>
    <div class="voltar">
    <button @click="goBack ()" class="btnVoltar"> < Voltar</button>
    </div>
    <div class="card" v-for="hero of filteredHero">
      <a><router-link :to="'/char/'+hero.id">
      <small>{{hero.name}}</small>
      <img class="hero" :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" />
      </router-link></a>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      heros: [],
      search: '',
      errors: [],
      letra: this.$route.params.letra
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=` + this.letra + `&limit=99&ts=123456&apikey=556a9cf8256d3a650cad325130950097&hash=b0c28bc682db6481c66de83ecb563b09`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.heros = response.data.data.results
        console.log(this.heros)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  computed: {

    // Filtered by Cites
    filteredHero () {
      return this.heros.filter(hero => {
        return hero.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>
<style>

.search{
  width: 272px;
}
.btnVoltar{
    color: white;
    border-radius: 6px;
    border: 1px solid #ED1D24;
    background: #ED1D24;
    margin-bottom: 7px;
    height: 30px;
    width: 60px;
    float: left;
}
div#marvel .voltar{
    margin-left: 12px;
    display: inline-block;
    width: 100%;
}

h1, h2 {
  font-weight: normal;
}

.html .body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:90%;
  margin-top: 16px;
  margin-bottom: 16px;
}
div#marvel .box {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
div#marvel .wrapper {
  display: flex;
  max-width: auto;
  flex-wrap: wrap;
  padding-top: 12px;

}
div#marvel .search-wrapper {
  width: 100%;

}
div#marvel .card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
}
div#marvel .card:hover {
  transform: scale(1.1);
}
div#marvel .card a {
  text-decoration: none;
  padding: 12px;
  color: black;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div#marvel .card a img {
  height: 100px;
  width: 100px;
  text-align: bottom;
}
div#marvel .card a small {
  font-size: 12px;
  padding: 4px;
}
.letras{
  margin-left: 2%;
  font-size: 15px;
}

</style>
