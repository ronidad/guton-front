<template>


<div class="flex min-h-scren">

  <div class="w-64 bg-grey-50 border-r border-gray-200">Sidebar  </div>
  

</div>
   
</template>
<script>
import { ref } from 'vue'
const is_expanded = ref(false)
export default {
   methods: {
       ToggleMenu() {
           is_expanded.value = !is_expanded.value

       },
       testIn() {
  console.log("hovering in sidebar");
},
testOut() {
  console.log("hovering outside sidebar");
}

   }

}
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.sidebar {
  height: 100%;
  width: 150px;
  position: fixed;
  top: 20;
  left: 0;
  background-color: #111;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

main .sidebar{
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.material-icons,
.icon-text {
  vertical-align: middle;
}

.material-icons {

  margin-right: 30px
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
  margin-left: 250px;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

</style>