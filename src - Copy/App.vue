<template>

<!-- <h2>header</h2> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <the-header></the-header> -->
  <router-view/>
 <!-- <register-user></register-user> -->
</template>

<script>

// import RegisterUser from "./components/pages/RegisterUser.vue";

// import HelloWorld from './components/HelloWorld.vue'
// import TheHeader from './components/layouts/TheHeader.vue'
// import axios from 'axios'
export default {

  // async created() {
  //   const response = await axios.get("user", {
  //     headers: {
  //       Authorization:  localStorage.getItem("token")
  //     }
  //   });
  //   console.log(response);
  // },
  name: 'App',
  components: {
    // HelloWorld,
    // TheHeader,
    // RegisterUser
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
