<template>
  <the-headersider></the-headersider>

  <section>
     
    
    
    
    
   <center>
    <table class="table table-striped table-bordered" id="product-table">
        <thead>
            <tr >
                <th><h3>Vehicle</h3></th>
                <th><h3>Revenue</h3></th>
                <th><h3>Deductions</h3></th>
                <th><h3>Net pay</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="revenue in revenues" :key="revenue.vehicle">
                    <td>{{ revenue.vehicle}}</td>
                    <td>{{ revenue.revenue}}</td>
                    <td>{{deductions}}</td>
                    <td>{{revenue.revenue - deductions}}</td>
                </tr>
            </tbody>
    </table>
</center>
<br>

 
  <button @click="downloadPDF">Download</button>
 <!-- <button @click="generateTable">new pdf</button> -->
  </section>
</template>

<script>
// import TheVehicle from "../../components/items/TheVehicle.vue"
import jsPDF from "jspdf";
import autotable from 'jspdf-autotable';
export default {
    
  components: {
    // TheVehicle,
    
  },
  computed: {
    revenues() {
      return this.$store.getters.revenues;
      
    },
    deductions (){
        return 500
    }



  },
  data(){
    return {
        // vehicles: this.revenues,
        allvehicles: []
        

    } 

  },
   methods: {
    downloadPDF(){
        var pdf=new jsPDF();
        // let item = [['Tea', 'suger','100',1000], ['Leaves', 'suger','200',1000]]
        const OctaImage = "data:image/png;base64,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"
        // pdf.text('Hello word',10,10);
        pdf.text('Vehicle report',80,25);
        pdf.line(0,36,400,36);
        pdf.addImage(OctaImage,'PNG',0,0,50,35)
        autotable(pdf, {
            head:[['Item','model','Count','price']],
            margin:{top:37},
            body:this.allvehicles
        }

        )
        // pdf.text(revenues,10,10)
        pdf.save('info.pdf');
    },
    // generateTable() {
    // var doc = new jsPDF('p', 'pt', 'letter');
    // var y = 20;
    // doc.setLineWidth(2);
    // doc.text(200, y = y + 30, "Product detailed report");
    // doc.autotable({
    //     html: '#product-table',
    //     startY: 70,
    //     theme: 'grid',
    //     columnStyles: {
    //         0: {
    //             halign: 'right',
    //             tableWidth: 100,
    //             },
    //         1: {
    //             tableWidth: 100,
    //            },
    //         2: {
    //             halign: 'right',
    //             tableWidth: 100,
    //            },
    //         3: {
    //             halign: 'right',
    //             tableWidth: 100,
    //            }
    //     },

    // // })
    // doc.save('auto_table_pdf');
// }

  },
  created() {
    this.$store.dispatch('LoadRevenues');  
    this.allvehicles = this.revenues
    
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



