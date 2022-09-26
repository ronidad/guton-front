<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    
    
   <center>
    <table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Vehicle</h3></th>
                <th><h3>route</h3></th>
                <th><h3>weight</h3></th>
                <th><h3>Date</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="trip in trips" :key="trip.id">
                    <td>{{ trip.vehicle}}</td>
                    <td>{{ trip.route}}</td>
                    <td>{{ trip.weight}}</td>
                    <td>{{trip.date}}</td>
                </tr>
            </tbody>
    </table>
</center>
<br>
<router-link to="/new/trip">Record a trip</router-link>
  </section>
</template>

<script>
// import TheVehicle from "../../components/items/TheVehicle.vue"

export default {
  components: {
    // TheVehicle,
    
  },
  computed: {
    trips() {
      return this.$store.getters.trips;
    }

  },
  created() {
    this.$store.dispatch('LoadTrips');  
    
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



