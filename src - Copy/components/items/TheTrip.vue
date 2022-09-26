<template>
    <base-card>
    <h1>Vehicle: {{ vehicle }}</h1>
    <h4>Route : {{ route}}</h4>
    <p>Weight: {{weight}}</p>
    <p>Date {{date}}</p>
   </base-card>
</template>

<script>
export default {
  
  props: ["id", "vehicle", "route", "weight", "date"],
   created() {
    this.$store.dispatch('LoadTrips');  
    
  },
  
};
</script>