<template>
<div id="marvel">
    <div class="wrapper">
      <div class="search-wrapper">
        <h1>Escolha uma letra para listar os heróis:</h1>
        <span v-for="letra in letras">
        <router-link :to="'/letter/'+letra.letra">
            <button class="letras">{{letra.letra}}</button>
        </router-link>
    </span>
      </div>
   <!-- <div class="card" v-for="hero of filteredHero">
      <a><router-link :to="'/char/'+hero.id">
      <small>{{hero.name}}</small>
      <img class="hero" :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" />
      </router-link></a>
    </div> -->
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
      letras: [
        { letra: 'A' }, { letra: 'B' }, { letra: 'C' }, { letra: 'D' }, { letra: 'E' }, { letra: 'F' }, { letra: 'G' }, { letra: 'H' }, { letra: 'I' }, { letra: 'J' }, { letra: 'K' },
        { letra: 'L' }, { letra: 'M' }, { letra: 'N' }, { letra: 'O' }, { letra: 'P' }, { letra: 'Q' }, { letra: 'R' }, { letra: 'S' }, { letra: 'T' }, { letra: 'U' }, { letra: 'V' },
        { letra: 'X' }, { letra: 'W' }, { letra: 'Y' }, { letra: 'Z' }
      ]
    }
  },

  // Fetches posts when the component is created.
  created (letra) {
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

h1, h2 {
  font-weight: normal;
}

.html .body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  color: white;
  font-size: 20px;
  border: 1px solid #ED1D24;
  background: #ED1D24;
  border-radius: 5px;
  margin-left: 2%;
  font-size: 15px;
}

</style>
