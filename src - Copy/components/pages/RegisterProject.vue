<template>
<the-headersider></the-headersider>
<base-card>

  <h2>Register transporter</h2>
  <form @submit.prevent="createtransporter">
    <div class="form-control">
      <label for="id_number"> ID Number </label>
      <input type="text" id="id_number" v-model="formData.id_number" />
    </div>
    <div class="form-control">
      <label for="name">Name </label>
      <input type="text" id="name" v-model="formData.name" />
    </div>
     <div class="form-control">
      <label for="account">Account Number </label>
      <textarea type="text" rows="4" id="account" v-model="formData.account" />
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
            id_number: '',
            name: '',
            account: '',
            
            

        },
        
     
      
    }
  },
     mounted() {
    let user = localStorage.getItem('user');
    this.user = JSON.parse(user)

    },
  methods: {
    async createtransporter(){
      const response = await axios.post("http://localhost:5000/transporter/registration/", this.formData)
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