<template>
  <div>
    <div v-for="data in adrs" v-if="data.adrs.length != 0">
      <h2>{{data.name}}</h2>
      <ul>
        <li v-for="adrData in data.adrs" v-if="adrData"><a v-bind:href="adrData.url">{{adrData.name}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import repositoriesData from './../../data/repositories.json'
import githubRepositoryData from './../../data/github.json'

export default {
  name: "Decisions",
  data(){
    return{
      repositories: repositoriesData,
    }
  },
  computed: {
    adrs: function () {
      return repositoriesData['main'].map(function(value){
        let githubData = githubRepositoryData[value.github].data.repository;
        let githubUrl = value.github;
        let mainUrl = value.url ? value.url : value.github;
        let filesAdrs = []
        if( githubData.filesAdrs !== null) {
          filesAdrs = githubData.filesAdrs.entries.map(function(value) {
            let file = value.path.substring(value.path.lastIndexOf('/') + 1);
            // Ignore some ADR files
            if(([
              "index.md",
              "NNNN-adr-template.md",
              "NNNN-adr-template.mdx",
              ].indexOf(file)) > -1){
              return null;
            }

            let name = file.replaceAll(/(\-|_)/ig," ")
            name = name.replace(/\.[^/.]+$/, "");

            return {
              url: githubUrl + "/blob/HEAD/" + value.path,
              path: value.path,
              name,
            }
          });
        };

        return {
          name: mainUrl.replace('https://gerrit.wikimedia.org/r/admin/repos/','').replace('https://github.com/',''),
          adrs: filesAdrs,
        }
      })
    }
  }
};
</script>

<style>
</style>
