<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{users}}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchusers();
  },
  methods: {
    async fetchusers() {
      try {
        const response = await axios.get('/api/users');
        console.log(response);
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
