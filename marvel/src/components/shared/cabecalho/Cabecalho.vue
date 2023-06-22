<template>
    
    <div class="cabecalho">
      <div class="row menu navbar">
       <slot></slot>
      </div>
    </div>


</template>

<style>

.cabecalho {
  border-bottom: 3px solid black;
  position: fixed;
  top: 0;
  width: 100%;
  background: #282420;
  opacity: 0.99;
  z-index: 99;
}


.menu {
  text-align: left;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 10px;
}

.menu>a{
  color: white;
  font-size: 40px;
}

.menu>a:hover{
  color: #E8E8E8;
}

</style>

