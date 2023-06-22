<template>
  
    <div class="bloco">
      <div class="bloco-foto">
        <img v-efeito :src="url + '/portrait_incredible.' + extension">
      </div>
      <br>
      <a href="#" class="bloco-nome">{{ name }}</a>
    </div>

</template>

<script>
export default {
  
    props: ['url', 'extension', 'name'],
}

</script>

<style>

.bloco {
  border: 3px solid black;
  border-radius: 10px;
  list-style: none;
  margin: 20px;
  padding: 10px;
  background: #E8E8E8;
  max-width: 250px;
  
}

.bloco .bloco-foto {
  display: inline-block;
  border: 1px gray solid;
  overflow: hidden;
}

.bloco .bloco-nome {
  padding-top: 10px;
  display: inline-table;
}

.bloco>h1{
  font-size: 25px;
}

</style>

