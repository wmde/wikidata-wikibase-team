<template>
  <div>
    <table style="width: 100%">
      <tr>
        <th>Column</th>
        <th>Explanation</th>
      </tr>
      <tr v-for="(column, index) in columns" v-bind:key="index">
        <td>{{ column.name }}</td>
        <td>{{ column.descr }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "TechPrioSheetTable",
  props: [ "columns" ],
};
</script>