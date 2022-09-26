<template>
    <the-headersider></the-headersider>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>price</h3></th>
                <th><h3>Plots</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.name}}</td>
                    <td>{{ project.price}}</td>
                    <td>{{ project.plots[0].id}}</td>
                    
                </tr>
            </tbody>
    </table>
    


</template>
<script>



export default {
    computed: {
        projects() {
            return  this.$store.getters.projects

            
        }

    }

}

</script>
