<template>
  <div id="roles">
    <table>
      <thead>
        <tr>{{content}}
          <th>name</th>
          <th> email</th>
        </tr>
      </thead>
      <tbody>
        <tr	v-for="(tutorial, index) in content"	:key="index">
          <td>{{tutorial.name}}</td>
          <td>{{tutorial.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  data() {
    return {
      content: []
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style scoped></style>
