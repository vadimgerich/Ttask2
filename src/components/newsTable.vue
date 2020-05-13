
<template>
    <div>
        <p v-if="newss.length==0" class="alert">
            Новини відсутні
        </p>
        
        <table v-if="newss.length>0">
            <tr>
                <th>#</th>
                <th>  Заголовок</th>
                <th> Опис  </th>
                <th>  Текст </th>
                <th> Автор </th>
                <th> Зірки </th>
                <th></th>
            </tr>
            <newsTableRow v-for="(news, index) in newss" 
                v-bind:key="news._id" 
                v-bind="{news, index}"       
            >             
            </newsTableRow>
        </table>
    </div> 
</template>

<script>
import newsTableRow from "./newsTableRow";
import { mapGetters, mapMutations} from 'vuex';


export default {
    name:"newsTable",      
    data(){
        return{         
          
        }
    },
    components:{
        newsTableRow
    }    
}
</script>

<style scoped>
    .alert{
        background: yellow;
        color: crimson;
    }

    table, table td{
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
    }
</style>