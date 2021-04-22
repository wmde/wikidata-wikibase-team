<template>
  <div>

    <v-data-table
      :headers="headers"
      :dense=true
      :disable-pagination=true
      :items="mainRepositories"
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
      <template v-slot:item.langs="{ item }">
        tba...
        <!-- <img v-if="item.langs.indexOf('php') > -1" width="20" height="20" src="https://php.net/favicon.ico">
        <img v-if="item.langs.indexOf('js') > -1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/20px-Javascript-736400_960_720.png">
        <img v-if="item.langs.indexOf('py') > -1" width="20" height="20" src="https://www.python.org/favicon.ico"> -->
      </template>
      <template v-slot:item.tools.npm="{ item }">
        <img v-if="item.tools.npm" width="20" height="20" src="https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png">
      </template>
      <template v-slot:item.tools.composer="{ item }">
        tba...
        <!-- <img v-if="item.tools.npm" width="20" height="20" src="https://getcomposer.org/favicon.ico"> -->
      </template>

    </v-data-table>

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
        { text: 'Location', value: 'location'},
        { text: 'Name', value: 'name' },
        { text: 'Languages', value: 'langs' },
        { text: 'NPM', value: 'tools.npm', class: 'vertical' }
      ]
    }
  },
  computed: {
    mainRepositories: function () {
      return repositoriesData['main'].map(function(value,index){
        let mainUrl = value.url ? value.url : value.github;
        import thisRepoData from './../../data/github/' + 'foo'
        return {
          url: mainUrl,
          location: mainUrl.includes('gerrit.wikimedia.org') ? 'gerrit' : ( mainUrl.includes('github.com') ? 'github' : 'unknown' ),
          name: mainUrl.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/',''),
          langs : value.languages ? value.languages : [],
          tools: {
            npm: value.tools && value.tools.indexOf('npm') > -1,
            composer: "tba.."
          },
        }
      })
    }
  }
};
</script>

<style>

th.vertical > span {
  writing-mode: vertical-rl;
  text-orientation: sideways;
}
</style>
