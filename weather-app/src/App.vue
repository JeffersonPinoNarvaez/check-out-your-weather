<template>
<div>
    <the-header>
  </the-header>
   <main>
      <router-view></router-view>
    </main>
</div>


</template>

<script>
import TheHeader from './components/containers/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}



</script>



<style>
/* 
Color palette:
#15133C
#73777B
#EC994B
#F1EEE9
https://colorhunt.co/palette/15133c73777bec994bf1eee9
*/
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
