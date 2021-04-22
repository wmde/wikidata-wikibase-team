<template>
  <div>

    <v-data-table
      :headers="headers"
      :items="mainRepositories"
      :items-per-page="100"
      class="elevation-1"
    >
      <template v-slot:item.location="{ item }">
        <a v-if="item.location === 'gerrit'" v-bind:href="item.url">
          <img width="20" height="20" src="https://gerrit.wikimedia.org/favicon.ico"></img> Gerrit
          </a>
        <a v-if="item.location === 'github'" v-bind:href="item.url">
          <img width="20" height="20" src="https://github.com/favicon.ico"></img> Github
        </a>
      </template>
      <template v-slot:item.name="{ item }">
        <a v-bind:href="item.url">
          {{item.name}}
        </a>
      </template>

    </v-data-table>
<!--     
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
    </tr> -->

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
      repositories: repositoriesData,
      headers: [
        { text: 'Location', value: 'location' },
        { text: 'Name', value: 'name' },
        { text: 'Languages', value: 'languages' },
        { text: 'Tooling', value: 'tools' }
      ]
    }
  },
  computed: {
    mainRepositories: function () {
      return repositoriesData['main'].map(function(value,index){
        console.log(value);
        return {
          url: value.url,
          location: value.url.includes('gerrit.wikimedia.org') ? 'gerrit' : ( value.url.includes('github.com') ? 'github' : 'unknown' ),
          name: value.url.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/',''),
          languages:"tba...",
          tools:"tba...",
          }
      })
    }
  }
};
</script>

<style scoped>
</style>
