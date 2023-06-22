<template>

  <div id="app">

    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>

export default {

}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: white;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
  font-size: 25px;
}

a:hover {
  text-decoration: none;
  color: #282420;
}

.pagina-enter, .pagina-leave-active {
  opacity: 0;
}

.pagina-active, .pagina-leave-active {
  transition: opacity .4s;
}

</style>

