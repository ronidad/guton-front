<template>
<base-card>

  <h2>Signup Here</h2>
  <form @submit.prevent="createUser">
    <div class="form-control">
      <label for="name"> Name </label>
      <input type="text" id="name" v-model="formData.name" />
    </div>
    <div class="form-control">
      <label for="email">Email </label>
      <input type="text" id="email" v-model="formData.email" />
    </div>
     <div class="form-control">
      <label for="password">Password </label>
      <input type="text" id="password" v-model="formData.password" />
    </div>
     <div class="form-control">
      <label for="cpassword">Confirm password </label>
      <input type="text" id="cpassword" v-model="formData.cpassword" />
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
        formData: {
            name: '',
            email: '',
            password: '',
            cpassword: '',

        },
      
    }
  },
  methods: {
    async createUser(){
      const response = await axios.post("http://localhost:5000/user/registration", this.formData)
      console.log(response)
        // axios.post("http://localhost:5000/user/registration", this.formData)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
        this.$router.replace('/login');
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