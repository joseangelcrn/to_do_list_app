<template>
<div>
    <v-card v-show="showList" class="mx-auto" max-width="800">
    <v-list flat subheader three-line>
      <v-subheader>
        Lista de Cosas
        <v-btn fab dark color="indigo" x-large style="margin-left: 80%;" @click="show.createModal = true">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-subheader>

      <v-list-item-group v-model="selectedItems" multiple active-class="">
        <div v-for="(item,index) in items" :key="item.title+index" >
          <item @deleteItem="deleteItem" :item="item" :index="index"></item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-card> 

  <modalCreateItem :showModal="show.createModal" @exitModal="show.createModal = false"></modalCreateItem>
  <modalDeleteItem :showModal="itemToDeleteIndex!= null" :index="itemToDeleteIndex" @exitModal="itemToDeleteIndex = null" @deleteItem="deleteItem()"></modalDeleteItem>
</div>
</template>

<script>
import DialogCreateTask from './DialogCreateTask';
import ListItemComponent from "./ListItemComponent";
import DialogDeleteTask from './DialogDeleteTask';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedItems: [],
      itemToDeleteIndex:null,
      show:{
        list:false,
        createModal:false,
        deleteModal:false
      }
    };
  },
  components: {
    item: ListItemComponent,
    modalCreateItem:DialogCreateTask,
    modalDeleteItem:DialogDeleteTask
  },
  beforeMount() {
    this.showList = true;
    this.$store.commit('task/examples');
  },
  methods: {
    deleteItem(data){
      this.itemToDeleteIndex = data.index;
    }
  },
  computed: {
    ...mapState('task',{
      items: state => state.items
    })
  },
};
</script>
