<template>
  <main>
    <article>
      <h1 class="tittle">Who’s is the author of this project?</h1>
     <h3>Who am I?</h3>
      <p>Hello, I’m Jeff, a software engineer with 4+ years of experiences across many IT roles. From technical assistant to JavaScript developer, I’ve been there. Across many years I have had the opportunity to be enrolled in a vast range of project from different industries, medical, financial, educational just to mention some. I strongly believe that this diversity is what drove me to think about sharing my experience with the community and apply all that knowledge into my projects. </p>
      <h3>Experience</h3>
      <p>Thanks to this experience and much of knowledge gathered with some courses, I have built some nice and cool free-to use pieces of code for the community. From C#, C++, JavaScript, TypeScript, and VueJS I have had amazing opportunities to work with cool technologies on the field. But none of this matter if you’re not in the right team, that is what counts at the end of the day. </p>
      <h3>Social life</h3>
      <p>Want to know more about my professional and chilling life? Follow me these sites and we could have a nice and cool conversation!</p>
       <div class="table">
        <div class="table__item">Twitter</div>
        <div class="table__item">Linkedin</div>
       </div>  
    </article>
  </main>

</template>

<script>
export default {

}
</script>

<style scooped>
main {
  padding: 20px;
}
article {
  text-align: justify;
}
article p {
  color: gray;
}
.tittle {
  text-align: center;
}
.table {
    display: flex;
    text-align: center;
    margin-top: 50px;
}
.table__item {
    flex:1
}
</style>