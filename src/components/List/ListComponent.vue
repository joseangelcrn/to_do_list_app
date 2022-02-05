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
          <item @deleteItem="deleteItem" @editItem="editItem" :item="item" :index="index"></item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-card> 

  <modalCreateItem :showModal="show.createModal" @exitModal="show.createModal = false"></modalCreateItem>
  <modalDeleteItem :showModal="itemToDeleteIndex!= null" :index="itemToDeleteIndex" @exitModal="exitModal()" @deleteItem="deleteItem()"></modalDeleteItem>
  <modalEditItem :showModal="show.editModal"   @exitModal="exitModal()"></modalEditItem>
</div>
</template>

<script>
import DialogCreateTask from '../Dialogs/DialogCreateTask';
import DialogDeleteTask from '../Dialogs/DialogDeleteTask';
import ListItemComponent from "./ListItemComponent";
import { mapState } from 'vuex';
import DialogEditTask from '../Dialogs/DialogEditTask';

export default {
  data() {
    return {
      selectedItems: [],
      itemToDeleteIndex:null,
      show:{
        list:false,
        createModal:false,
        deleteModal:false,
        editModal:false
      }
    };
  },
  components: {
    item: ListItemComponent,
    modalCreateItem:DialogCreateTask,
    modalDeleteItem:DialogDeleteTask,
    modalEditItem:DialogEditTask
  },
  beforeMount() {
    this.showList = true;
    this.$store.commit('task/examples');
  },
  methods: {
    deleteItem(data){
      this.itemToDeleteIndex = data.index;
    },
    editItem(data){
     this.$emit('')
    },
    exitModal(){
      console.log('exitModal (parent)');
      this.itemToDeleteIndex = null
      this.show.deleteModal = false;
      this.itemToEdit = null;
    }
  },
  computed: {
    ...mapState('task',{
      items: state => state.items
    })
  },
};
</script>
