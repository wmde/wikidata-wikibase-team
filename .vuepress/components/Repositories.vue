<template>
  <div>

    <h2>Ours</h2>
    <table>
      <tr>
        <th>Location</th>
        <th>Repository</th>
        <th>Languages</th>
        <th colspan="10">Tooling</th>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>NPM</th>
        <th>Composer</th>
      </tr>
    <tr v-for="repo in repositories['main']" :key="repo.url">
      <td>
        <a v-if="repo.url.includes('gerrit.wikimedia.org')" v-bind:href="repo.url">
          <img width="20" height="20" src="https://gerrit.wikimedia.org/favicon.ico"></img> Gerrit
          </a>
        <a v-if="repo.url.includes('github.com')" v-bind:href="repo.url">
          <img width="20" height="20" src="https://github.com/favicon.ico"></img> Github
          </a>
      </td>
      <td>
        <a v-bind:href="repo.url">{{repo.url.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/','')}}</a>
      </td>
      <td>
        tba...
        <img v-if="repo.languages && repo.languages.indexOf('php') > -1" width="20" height="20" src="https://php.net/favicon.ico">
        <img v-if="repo.languages && repo.languages.indexOf('js') > -1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/20px-Javascript-736400_960_720.png">
        <img v-if="repo.languages && repo.languages.indexOf('py') > -1" width="20" height="20" src="https://www.python.org/favicon.ico">
      </td>
      <td>
        <img v-if="repo.tools && repo.tools.indexOf('npm') > -1" width="20" height="20" src="https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png">
      </td>
      <td>
        <img v-if="repo.tools && repo.tools.indexOf('composer') > -1" width="20" height="20" src="https://getcomposer.org/favicon.ico">
      </td>
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
