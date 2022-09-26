<template>
<the-headersider></the-headersider>




   <table>
    <tr>
    <td><base-card>Projects</base-card></td>
    <td><base-card>plots</base-card></td>
    <td><base-card>sales people</base-card></td>
    <td><base-card>clients</base-card></td>
    </tr>
    <tr>
    <td><base-card>Invoices</base-card></td>
    <td><base-card>Revenues</base-card></td>
    <td><base-card>Expenditures</base-card></td>
    <td><base-card>Income</base-card></td>
    </tr>

   </table>
  
</template>
<script>

</script>

<style scoped>
.dashboard {
    background-color:azure;
    box-sizing: border-box;
    padding: 3px;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 2fr 4fr;
    grid-gap: 0ch;
    height: 100vh;
    
    grid-template-areas: 
    /* "theader theader theader" */
    "sidebar sheader sheader"
    "sidebar smain smain"

    ;
    


}
.sidebar {
    grid-area: sidebar;
    background-color:rgb(113, 180, 47);

}
.sheader {
    grid-area: sheader;
    background-color: rgb(221, 216, 209);
}
.smain {
    grid-area: main;
    background-color:beige;
}
.theader {
    grid-area: theader;
    grid-area: theader;
}

</style>