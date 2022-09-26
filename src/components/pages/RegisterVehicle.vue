<template>
<the-headersider></the-headersider>
<base-card>

  <h2>Enter Vehicle details</h2>
  <form @submit.prevent="createVehicle">
    <div class="form-control">
      <label for="registration"> Registration </label>
      <input type="text" id="registration" placeholder="Vehicle reg" v-model.trim="formData.registration" />
    </div>
    <div class="form-control">
      <label for="owner">Owner </label>
      <input type="text" id="owner" v-model="formData.owner" />
    </div>
     <div class="form-control">
      <label for="description">Description </label>
      <textarea type="text" rows="4" id="description" v-model="formData.description" />
    </div>
    

     
    
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
            registration: '',
            owner: '',
            description: '',
            registered_by: '',
            
            

        },
        
     
      
    }
  },
     mounted() {
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user)

    },
  methods: {
    async createVehicle(){
      const response = await axios.post("http://localhost:5000/vehicle/registration/", this.formData)
      console.log(response)
      console.log(localStorage.getItem('user'))
      
        // axios.post("http://localhost:5000/user/registration", this.formData)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
        this.$router.replace('/vehicles');
        console.log(this.formData)

    

    },
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