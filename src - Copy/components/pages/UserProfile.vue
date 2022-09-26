<template>
<the-headersider></the-headersider>
  <div>
       <base-card>
    <div  v-if="isLoggedIn" >  {{ user.name }} profile
    <!-- <router-link to="/dashboard">Dashboard</router-link> -->
    </div>
    <div v-else>
    <router-link  to="/login">login</router-link>
    </div>
    <!-- <router-link v-if="!isLoggedIn" to="/login"><button>Login</button></router-link> -->
  </base-card>
  </div>
</template>
<script>
// import axios from "axios";
export default {
    
     computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods:{
    handleLogout() {
      this.$store.dispatch('clearToken')
      localStorage.removeItem('token') // clear your user's token from localstorage
      localStorage.removeItem('user') // clear your user from localstorage

      this.$router.push('/login')

    }
  },
     data(){
          return {
               user: ""
          }
     },
     mounted(){
          let user = localStorage.getItem('user')
          this.user = JSON.parse(user)
     },
    
    
  async created() {
      const User = await JSON.parse(localStorage.getItem("user"))
    //   let obj = JSON.parse(localStorage.getItem('user'));
      console.log(User)
    // const response = await axios.get("user", {
    //   headers: {
    //     Authorization: "Bearer" + localStorage.getItem("token")
    //   }
    // });
    // console.log(response);
  },
};
</script>
