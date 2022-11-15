<template>

<div class="container">
    <search-bar></search-bar>
    <the-menu></the-menu>
</div>
  
</template>

<script>
import SearchBar from '../pages/SearchBar.vue';
import TheMenu from '../nav/Menu.vue';

export default {
    components: {
        SearchBar,
        TheMenu
    }

}
</script>

<style scoped>

.container {
    background-color: #15133C;
    display:flex;
    flex-direction:row;
}
</style>