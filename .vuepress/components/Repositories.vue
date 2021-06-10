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
        <a v-bind:href="item.url" v-bind:title="item.description">
          {{item.name}}
        </a>
      </template>

      <template v-slot:item.primaryLanguage="{ item }">
        <img v-if="item.primaryLanguage == 'PHP'" width="20" height="20" src="https://php.net/favicon.ico">
        <img v-if="item.primaryLanguage == 'JavaScript'" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/20px-Javascript-736400_960_720.png">
        <img v-if="item.primaryLanguage == 'TypeScript'" width="20" height="20" src="https://www.typescriptlang.org/favicon.ico">
        <img v-if="item.primaryLanguage == 'Python'" width="20" height="20" src="https://www.python.org/favicon.ico">
        <img v-if="item.primaryLanguage == 'Vue'" width="20" height="20" src="https://vuejs.org/images/icons/favicon-32x32.png">
        <img v-if="item.primaryLanguage == 'Ruby'" width="20" height="20" src="https://www.ruby-lang.org/favicon.ico">
        <img v-if="item.primaryLanguage == 'Shell'" width="20" height="20" src="https://bashlogo.com/img/symbol/png/full_colored_dark.png">
        {{item.primaryLanguage}}
      </template>

      <template v-slot:item.tools.npm="{ item }">
        <img v-if="item.tools.npm" width="20" height="20" src="https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png">
      </template>
      <template v-slot:item.tools.composer="{ item }">
        <img v-if="item.tools.composer" width="20" height="20" src="https://getcomposer.org/favicon.ico">
      </template>
      <template v-slot:item.tools.grunt="{ item }">
        <img v-if="item.tools.grunt" width="20" height="20" src="https://gruntjs.com/img/favicons/favicon.ico">
      </template>
      <template v-slot:item.tools.phpunit="{ item }">
        <img v-if="item.tools.phpunit" width="20" height="20" src="https://phpunit.de/favicon-32x32.png">
      </template>
      <template v-slot:item.tools.travis="{ item }">
        <img v-if="item.tools.travis" width="20" height="20" src="https://travis-ci.com/images/logos/TravisCI-Mascot-3.svg">
      </template>
      <template v-slot:item.tools.githubWorkflows="{ item }">
        <img v-if="item.tools.githubWorkflows" width="20" height="20" src="https://github.com/favicon.ico">
      </template>
      <template v-slot:item.tools.githubDependabot="{ item }">
        <img v-if="item.tools.githubDependabot" width="20" height="20" src="https://avatars.githubusercontent.com/u/27347476?s=280&v=4">
      </template>
      <template v-slot:item.tools.scrutinizer="{ item }">
        <img v-if="item.tools.scrutinizer" width="20" height="20" src="https://scrutinizer-ci.com/favicon.ico">
      </template>
      <template v-slot:item.tools.phpcs="{ item }">
        <span v-if="item.tools.phpcs">✔️</span>
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
import githubRepositoryData from './../../data/github.json'

export default {
  name: "Repositories",
  data(){
    return{
      repositories: repositoriesData,
      headers: [
        { text: 'Location', value: 'location'},
        { text: 'Name', value: 'name' },
        { text: 'Language', value: 'primaryLanguage' },
        { text: 'GHActions', value: 'tools.githubWorkflows', class: 'vertical' },
        { text: 'Dependabot', value: 'tools.githubDependabot', class: 'vertical' },
        { text: 'Travis', value: 'tools.travis', class: 'vertical' },
        { text: 'Scrutinizer', value: 'tools.scrutinizer', class: 'vertical' },
        { text: 'Composer', value: 'tools.composer', class: 'vertical' },
        { text: 'PHPUnit', value: 'tools.phpunit', class: 'vertical' },
        { text: 'PHPCS', value: 'tools.phpcs', class: 'vertical' },
        { text: 'NPM', value: 'tools.npm', class: 'vertical' },
        { text: 'Grunt', value: 'tools.grunt', class: 'vertical' },
      ]
    }
  },
  computed: {
    mainRepositories: function () {
      return repositoriesData['main'].map(function(value){
        let githubData = githubRepositoryData[value.github].data.repository;
        let mainUrl = value.url ? value.url : value.github;
        let filesRoot = githubData.filesRoot.entries.map(function(value) {
          return value.path
        });
        let filesDotGithub = []
        if( githubData.filesDotGithub !== null) {
          filesDotGithub = githubData.filesDotGithub.entries.map(function(value) {
          return value.path
          });
        };

        return {
          url: mainUrl,
          location: mainUrl.includes('gerrit.wikimedia.org') ? 'gerrit' : ( mainUrl.includes('github.com') ? 'github' : 'unknown' ),
          name: mainUrl.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/',''),
          primaryLanguage : githubData.primaryLanguage ? githubData.primaryLanguage.name : null,
          description : githubData.description,
          tools: {
            npm: filesRoot.indexOf('package.json') > -1,
            composer: filesRoot.indexOf('composer.json') > -1,
            grunt: filesRoot.indexOf('Gruntfile.js') > -1,
            phpunit: filesRoot.indexOf('phpunit.xml.dist') > -1,
            travis: filesRoot.indexOf('.travis.yml') > -1,
            scrutinizer: filesRoot.indexOf('.scrutinizer.yml') > -1,
            phpcs: filesRoot.indexOf('.phpcs.xml') > -1,
            githubWorkflows: filesDotGithub.indexOf('.github/workflows') > -1,
            githubDependabot: filesDotGithub.indexOf('.github/dependabot.yml') > -1,
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
