<template>
<div class="theader">
    <header>
    <nav>
      <h1><router-link to="/">Roberms</router-link></h1>
      <ul> 
        <li v-if="isLoggedIn">
          <router-link to="/profile">profile</router-link>
        </li>
        <li v-else>
          <router-link to="/register">signup</router-link>
          <router-link to="/login">login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="handleLogout">logout</base-button>
       </li>
        <!-- <li v-if="isLoggedIn">
          <router-link to="/register">sign Uo</router-link>
        </li> -->
       

        <!-- <li v-if="isLoggedIn">
          <base-button @click="logout">logout</base-button>
        </li> -->
      </ul>
    </nav>
  </header>
  </div>
</template>
<script>
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
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: #05055f;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
