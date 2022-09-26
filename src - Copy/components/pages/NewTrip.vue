<template>
<the-headersider></the-headersider>

<base-card>

  <h2>Record a trip</h2>
  <form @submit.prevent="createtransporter">
    <div class="form-control">
    <div class="field">
        <label class="label">Vehicle</label>
        <div class="select">
          <select v-model="formData.vehicle">
            <option disabled value="">
              Select a vehicle
            </option>
             <option  v-for="vehicle in vehicles" :key="vehicle.id">
       {{ vehicle.registration }}
    </option>
          </select>
        </div>
      </div>
      </div>

      <div class="form-control">
    <div class="field">
        <label class="label">Route</label>
        <div class="select">
          <select v-model="formData.route">
            <option disabled value="">
              Select dropdown
            </option>
            
            <option  v-for="route in routes" :key="route.id">
       {{ route.name }}
    </option>
          </select>
        </div>
      </div>
      </div>
    
    
     <div class="form-control">
      <label for="weight">Weight in Kgs </label>
      <input type="text"  id="weight" v-model="formData.weight" />
    </div>
    <!-- <div class="form-control">
      <label for="registered_by"> reg by</label>
      <input type="text"  id="registered_by" v-model="formData.registered_by" />
    </div> -->

     
    
    <base-button>Submit</base-button>
  </form>
  </base-card>
</template>

<script>
import axios from 'axios'
export default {
    
    
 
  data() {
  
    return {
        user: '',
        
        formData: {
            vehicle: '',
            route: '',
            weight: '',
            
            

        },
        
     
      
    }
  },
     mounted() {
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user)

    },
  methods: {
    async createtransporter(){
      const response = await axios.post("http://localhost:5000/trip/registration/", this.formData)
      console.log(response)
      console.log(localStorage.getItem('user'))
      
        // axios.post("http://localhost:5000/user/registration", this.formData)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
        this.$router.replace('/trips');
        console.log(this.formData)

    

    },
  },
   computed: {
    vehicles() {
      return this.$store.getters.allvehicles;
    },
     routes() {
      return this.$store.getters.routes;
     }
    

  },
  created() {
    this.$store.dispatch('LoadVehicles');  
    this.$store.dispatch('LoadRoutes');  
    
  },
  
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>



    


<script>


</script>