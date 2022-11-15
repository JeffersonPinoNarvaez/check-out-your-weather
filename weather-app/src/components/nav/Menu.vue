<template>
    <div class="container">
        <nav>
            <div class="menu_container">
                <div class="menu_item" @click="toggleAuthorSection()">Author</div>
                <div class="menu_item" @click="toggleDonateSection()">Donate</div>
            </div>
        </nav>    
    </div>  
</template>

<script>

export default {
    computed: {
    },
    data(){
        return {
        }
    },
    components: {
    },
    methods: {
        toggleAuthorSection(){
            this.$router.push('/menu/author')
        },
        toggleDonateSection(){
            this.$router.push('/menu/donate')
        },
    }
}
</script>

<style scoped>
.container {
    text-align: center;
   

}
.menu_container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
}
.menu_item {
  flex: 1 1 25%;
  list-style-type: none;
  padding: 10px;
  color: white
}
</style>