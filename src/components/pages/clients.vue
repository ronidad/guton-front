<template>
    <the-headersider></the-headersider>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>phone</h3></th>
                <th><h3>address</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                    <td>{{ client.name}}</td>
                    <td>{{ client.phone_number}}</td>
                    <td>{{ client.Address}}</td>
                    
                </tr>
            </tbody>
    </table>
    


</template>
<script>



export default {
    computed: {
        clients() {
            return  this.$store.getters.clients

            
        }

    }

}

</script>
