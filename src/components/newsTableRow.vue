// рядок що відбражає 1 новину
<template>
    <tr>        
        <td> {{index+1}} </td>
        <td> {{news.title}} </td>
        <td> {{news.author}} </td>
        <td> {{news.text}} </td>
        <td> {{news.comment}} </td>
        <td> {{news.stars}} </td>     
    </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:"newsTableRow",
    props:{
        index:Number,
        news:Object        
    },
    data(){   
        return{

        }
    },
}
</script>

<style scoped>
    td{
        border: 1px solid black;
    }
</style>