<template>
  <div>
    <table style="width: 100%">
      <tr>
        <td>What</td>
        <td><ul><template v-for="item in what"><li>{{item}}</li></template></ul></td>
      </tr>
      <tr>
        <td>Who</td>
        <td>{{who}}</td>
      </tr>
      <tr>
        <td>Why</td>
        <td><ul><template v-for="item in why"><li>{{item}}</li></template></ul></td>
      </tr>
      <tr>
        <td>Since</td>
        <td>{{since}}</td>
      </tr>
      <tr>
        <td>Docs</td>
        <td><ul><template v-for="item in docs"><li><a v-bind:href="item.url">{{item.name}}</a></li></template></ul></td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "ProcessTable",
  props: ["what", "who", "why", "since", "docs"],
};
</script>