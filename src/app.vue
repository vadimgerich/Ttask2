<template>
  <div id="app">    
    <messageSystem></messageSystem>
    <searchString></searchString>
    <hr>
    <queryForm></queryForm>
    <hr>
    <input type="button" @click="showAddForm" value=" Додати новини" />
    <newsTable></newsTable>
    <newsForm></newsForm>
  </div>
</template>

<script>
import Vue from "vue";
import newsTable from "./components/newsTable";
import newsForm from "./components/newsForm";
import messageSystem from "./components/messageSystem";
import axios from "axios";
import { mapActions } from 'vuex';

export default {
  //назва компоненту, співпадає із назвою файла  
  name: "app",
  //компоненти які використовуються в додатку
  components: {
    newsTable,
    newsForm,
    messageSystem
  },
  //дані компонента на початку
  data() {
    return {        
    };
  },

  mounted() {    
    this.getNewss(); 
  },  //методи 
  methods: {
    ...mapActions(["getNewss"]),   
  },
  
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
</style>