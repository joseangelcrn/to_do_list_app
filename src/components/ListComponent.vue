<template>
<div>
    <v-card v-show="showList" class="mx-auto" max-width="800">
    <v-list flat subheader three-line>
      <v-subheader>
        Lista de Cosas
        <v-btn fab dark color="indigo" x-large style="margin-left: 80%;" @click="showModal = true">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-subheader>

      <v-list-item-group v-model="selectedItems" multiple active-class="">
        <div v-for="(item,index) in items" :key="item.title+index" >
          <item :item="item"></item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-card> 

  <modalCreateItem :showModal="showModal" @exitModal="showModal = false" @saveModal="saveItem"></modalCreateItem>
</div>
</template>

<script>
import DialogCreateTask from './DialogCreateTask';
import ListItemComponent from "./ListItemComponent";

export default {
  data() {
    return {
      selectedItems: [],
      items: [],
      showList:false,
      showModal:false
    };
  },
  components: {
    item: ListItemComponent,
    modalCreateItem:DialogCreateTask
  },
  beforeMount() {
    this.showList = true;
    
    for (let i = 1; i <= 3; i++) {
      this.items.push({
        title: `Tarea num. ${i}.`,
        description: "Descripcion de mi tarea",
      });
    }

  },
  methods: {
    saveItem(item){
      console.log('savingItem');
      console.log(item);
      this.items.push(item);
      this.showModal = false;
    }
  },
};
</script>
