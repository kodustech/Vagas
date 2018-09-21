<template>
<div id="char" class="detail">
    <div class="voltar">
    <button @click="goBack ()" class="btnVoltar"> < Voltar</button>
    </div>
    <div class="box">
      <div>
        <img class="heroThumbnail" :src="hero[0].thumbnail.path+'.'+hero[0].thumbnail.extension" />
      </div>
      <div class="name">
        <h1>{{hero[0].name}}</h1>
      </div>
      <div class="last">
        <p class="left"> Ultimas aparições: </p><br><br>
        <ul>
          <li v-for="hero in hero[0].series.items.slice(0, 5)">
            <span class="left">{{ hero.name }}</span>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      hero: [],
      heroID: this.$route.params.id,
      errors: []
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
    axios.get(`http://gateway.marvel.com/v1/public/characters/` + this.heroID + `?ts=123456&apikey=556a9cf8256d3a650cad325130950097&hash=b0c28bc682db6481c66de83ecb563b09`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.hero = response.data.data.results
        console.log(this.hero)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style>

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
div#char .voltar{
    display: inline-block;
    width: 90%;
}
.last{
  margin-top: -10px;
  float: left;
  height: 154px;
}
.left{
  float:left;
}
.name{
  height: 60px;
  width: 75%;
  float:left;
}
.detail{
  margin-top: 20px;
}
.thumb{
  width: 25%;
}
.heroThumbnail{
  height: 200px;
  width: 200px;
  float: left;
  border: 2px solid rgba(0, 0, 0, 0.52);
  margin: 5px 5px;

}

.box {
  margin: 0 auto;
  width: 90%;
  height: 215px;
  border: 2px solid rgba(0, 0, 0, 0.32);
}
.wrapper {
  display: flex;
  max-width: auto;
  flex-wrap: wrap;
  padding-top: 12px;
}

</style>
