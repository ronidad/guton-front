<template>
  <!-- <side-bar></side-bar>   -->
  
  <div class="wrapper">
    <div class="sidebar">
      <h2>sidebar</h2>
      <ul>
        
        <li> <a href="/dashboard"><i class="fas fa-home"></i>Dashboard</a></li>
        <!-- <li> <a href="#"><i class="fas fa-user"></i>Vehicles</a></li> -->
        <li> <a href="/dashboard"><i class="fas fa-address-card"></i>Sales people</a></li>
        <li> <a href="/dashboard"><i class="fas fa-project-diagram"></i>Accounts</a></li>
        <li> <a href="/dashboard"><i class="fas fa-blog"></i>Plots</a></li>
        <!-- <li> <a href="#"><i class="fas fa-address-book"></i>Admins</a></li> -->
        <li> <a href="/dashboard"><i class="fas fa-map-pin"></i>projects</a></li>
        <li> <a href="/dashboard"><i class="fas fa-map-pin"></i>Revenues</a></li>
        <li> <a href="/dashboard"><i class="fas fa-map-pin"></i>Expenses</a></li>
      </ul>
    </div>
    <div class="main_content">
      <div class="header">
        <nav>
      <h3> <router-link to="#">welcome {{user.name}}</router-link></h3>
      <ul> 
        <li v-if="isLoggedIn">
          <router-link to="/profile">profile</router-link>
        </li>
        <li v-else>
          <router-link to="/register">signup</router-link>
          <router-link to="/login">login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="handleLogout">logout</button>
       </li>
        <!-- <li v-if="isLoggedIn">
          <router-link to="/register">sign Uo</router-link>
        </li> -->
       

        <!-- <li v-if="isLoggedIn">
          <base-button @click="logout">logout</base-button>
        </li> -->
      </ul>
    </nav>
        <!-- <router-link>logout</router-link> -->
      </div>
      <div class="main_content">
        <div>
        </div>
      </div>
    </div>

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
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;;
}
body {
  background: #fdfbfb;
  margin-left: 220px;
}
.wrapper {
  display: flex;
  position: relative;
}

.wrapper .sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  background: rgb(35, 48, 66);
  padding: 30px 0;

}
.wrapper .sidebar h2 {
  color: #ffff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}
.wrapper .sidebar ul li {
  padding: 2px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.05);
   border-top: 1px solid rgb(225, 225, 225, 0.05);
}
.wrapper .sidebar ul li a {
  color: #bdb8d7;
  display: block;
}
.wrapper .sidebar ul li .fas {
  width: 25px;
}
.wrapper .sidebar ul li :hover {
  background: #594f8d;
}
.wrapper .sidebar ul li :hover a {
  color: #ffff;
}
.wrapper .main_content {
  width: 100%;
  margin-left: -20px;
  margin-top: 20px;
  
   
}
.wrapper .main_content .header {
  /* padding: 20px; */
  background: rgba(249, 251, 252, 0.973);
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
  height: 3rem;
  width: 101%;
  margin-top: -15px;
  
 
}
.header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header a {
  text-decoration: none;
  
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}


table, th, td {
  border: 1px solid;
  padding: 7px;
}
table {
  width: 90%;
   border: 1px solid;
   border-collapse: collapse;
   
  
}
table, tr {
    color: #717171;
}
/* tr:hover {background-color: #717070;} */

</style>