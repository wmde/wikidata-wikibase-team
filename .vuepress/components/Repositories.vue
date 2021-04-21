<template>
  <div>

    <h2>Ours</h2>
    <table>
      <tr>
        <th>Location</th>
        <th>Repository</th>
      </tr>
    <tr v-for="data in repositories['main']">
      <td>
        <a v-if="data.includes('gerrit.wikimedia.org')" v-bind:href="data">
          <img width="20" height="20" src="https://gerrit.wikimedia.org/favicon.ico"></img> Gerrit
          </a>
        <a v-if="data.includes('github.com')" v-bind:href="data">
          <img width="20" height="20" src="https://github.com/favicon.ico"></img> Github
          </a>
      </td>
      <td><a v-bind:href="data">{{data.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/','')}}</a></td>
    </tr>
    </table>

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
