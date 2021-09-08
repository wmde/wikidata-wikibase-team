<template>
  <div>

    <vue-good-table
      :columns="columns"
      :rows="rows"
    >
      <template slot="table-row" slot-scope="props">

        <span v-if="props.column.field == 'location'">
          <a v-bind:href="props.row.githubUrl">
            <img width="20" height="20" src="https://github.com/favicon.ico"></img>
          </a>
          <a v-if="props.row.location === 'gerrit'" v-bind:href="props.row.url">
            <img width="20" height="20" src="https://gerrit.wikimedia.org/favicon.ico"></img>
          </a>
        </span>

        <span v-if="props.column.field == 'name'">
          <Popover position="end">
            <template v-slot:target>
              <a v-bind:href="props.row.url">
                  {{props.row.name}}
              </a>
            </template>
            {{props.row.description}}
          </Popover>
        </span>

        <span v-if="props.column.field == 'created'">
          {{new Date(props.row.created) | dateFormat('YYYY')}}
        </span>
        <span v-if="props.column.field == 'updated'">
          {{new Date(props.row.updated) | dateFormat('YYYY-MM')}}
        </span>

        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'PHP'" >
          <img width="20" height="20" src="https://php.net/favicon.ico"> PHP
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'JavaScript'" >
          <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/20px-Javascript-736400_960_720.png"> JavaScript
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'TypeScript'" >
          <img width="20" height="20" src="https://www.typescriptlang.org/favicon.ico"> TypeScript
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'Python'" >
          <img width="20" height="20" src="https://www.python.org/favicon.ico"> Python
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'Vue'" >
          <img width="20" height="20" src="https://vuejs.org/images/icons/favicon-32x32.png"> Vue
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'Ruby'" >
          <img width="20" height="20" src="https://www.ruby-lang.org/favicon.ico"> Ruby
        </span>
        <span v-if="props.column.field == 'primaryLanguage' && props.row.primaryLanguage == 'Shell'" >
          <img width="20" height="20" src="https://bashlogo.com/img/symbol/png/full_colored_dark.png"> Shell
        </span>

        <img v-if="props.column.field == 'tools.npm' && props.row.tools.npm" width="20" height="20" src="https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png">
        <img v-if="props.column.field == 'tools.composer' && props.row.tools.composer" width="20" height="20" src="https://getcomposer.org/favicon.ico">
        <img v-if="props.column.field == 'tools.grunt' && props.row.tools.grunt" width="20" height="20" src="https://gruntjs.com/img/favicons/favicon.ico">
        <img v-if="props.column.field == 'tools.phpunit' && props.row.tools.phpunit" width="20" height="20" src="https://phpunit.de/favicon-32x32.png">
        <img v-if="props.column.field == 'tools.travis' && props.row.tools.travis" width="20" height="20" src="https://www.travis-ci.com/wp-content/uploads/2021/08/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg">
        <img v-if="props.column.field == 'tools.githubWorkflows' && props.row.tools.githubWorkflows" width="20" height="20" src="https://github.com/favicon.ico">
        <img v-if="props.column.field == 'tools.githubDependabot' && props.row.tools.githubDependabot" width="20" height="20" src="https://avatars.githubusercontent.com/u/27347476?s=280&v=4">
        <img v-if="props.column.field == 'tools.scrutinizer' && props.row.tools.scrutinizer" width="20" height="20" src="https://scrutinizer-ci.com/favicon.ico">
        <span v-if="props.column.field == 'tools.phpcs' && props.row.tools.phpcs">✔️</span>
      </template>

    </vue-good-table>

    <h2>Others</h2>
    <ul>
      <li v-for="data in repositories['related']"><a v-bind:href="data">{{data}}</a></li>
    </ul>

  </div>
</template>

<script>
import repositoriesData from './../../data/repositories.json'
import githubRepositoryData from './../../data/github.json'
import { Popover } from '@wmde/wikit-vue-components';

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {
  name: "Repositories",
  components: {
		Popover,
    VueGoodTable,
	},
  data(){
    return{
      columns: [
        { label: 'Repo', field: 'location'},
        { label: 'Name', field: 'name' },
        { label: 'Created', field: 'created' },
        { label: 'Updated', field: 'updated' },
        { label: 'Language', field: 'primaryLanguage' },
        { label: 'GHActions', field: 'tools.githubWorkflows', thClass: 'vertical' },
        { label: 'Dependabot', field: 'tools.githubDependabot', thClass: 'vertical' },
        { label: 'Travis', field: 'tools.travis', thClass: 'vertical' },
        { label: 'Scrutinizer', field: 'tools.scrutinizer', thClass: 'vertical' },
        { label: 'Composer', field: 'tools.composer', thClass: 'vertical' },
        { label: 'PHPUnit', field: 'tools.phpunit', thClass: 'vertical' },
        { label: 'PHPCS', field: 'tools.phpcs', thClass: 'vertical' },
        { label: 'NPM', field: 'tools.npm', thClass: 'vertical' },
        { label: 'Grunt', field: 'tools.grunt', thClass: 'vertical' },
      ],
      repositories: repositoriesData
    }
  },
  computed: {
    rows: function () {
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
          githubUrl: value.github,
          location: mainUrl.includes('gerrit.wikimedia.org') ? 'gerrit' : ( mainUrl.includes('github.com') ? 'github' : 'unknown' ),
          name: mainUrl.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/',''),
          primaryLanguage : githubData.primaryLanguage ? githubData.primaryLanguage.name : null,
          created : githubData.createdAt,
          updated : githubData.pushedAt,
          description : githubData.description,
          tools: {
            npm: filesRoot.indexOf('package.json') > -1 ? true : "",
            composer: filesRoot.indexOf('composer.json') > -1 ? true : "",
            grunt: filesRoot.indexOf('Gruntfile.js') > -1 ? true : "",
            phpunit: filesRoot.indexOf('phpunit.xml.dist') > -1 ? true : "",
            travis: filesRoot.indexOf('.travis.yml') > -1 ? true : "",
            scrutinizer: filesRoot.indexOf('.scrutinizer.yml') > -1 ? true : "",
            phpcs: filesRoot.indexOf('.phpcs.xml') > -1 ? true : "",
            githubWorkflows: filesDotGithub.indexOf('.github/workflows') > -1 ? true : "",
            githubDependabot: filesDotGithub.indexOf('.github/dependabot.yml') > -1 ? true : "",
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

.wikit-Popover__content-wrapper {
  z-index: 100;
}
</style>