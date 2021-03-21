<template>
  <div>
    <h2>Ours</h2>
    <ul>
      <li v-for="data in repositories['main']"><a v-bind:href="data">{{data}}</a></li>
    </ul>
    <h2>Others</h2>
    <ul>
      <li v-for="data in repositories['related']"><a v-bind:href="data">{{data}}</a></li>
    </ul>
  </div>
</template>

<script>
import repositoriesData from './../../data/repositories.json'
export default {
  name: "Repositories",
  data(){
    return{
      repositories: repositoriesData
    }
  }
};
</script>

<style scoped>
</style>
