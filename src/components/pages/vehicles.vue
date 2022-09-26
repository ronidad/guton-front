<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    
    
   <center>
    <table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Registration</h3></th>
                <th><h3>Vehicle Owner</h3></th>
                <th><h3>Description</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="vehicle in vehicles" :key="vehicle.id">
                    <td>{{ vehicle.registration}}</td>
                    <td>{{ vehicle.owner}}</td>
                    <td>{{vehicle.description}}</td>
                </tr>
            </tbody>
    </table>
</center>
<br>
<router-link to="/register/vehicle">Register new vehicle </router-link>
  </section>
</template>

<script>
// import TheVehicle from "../../components/items/TheVehicle.vue"

export default {
  components: {
    // TheVehicle,
    
  },
  computed: {
    vehicles() {
      return this.$store.getters.allvehicles;
    }

  },
  created() {
    this.$store.dispatch('LoadVehicles');  
    
  },
 

  

 
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>

