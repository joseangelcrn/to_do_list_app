<template>
  <div>
    <v-expand-transition>
      <v-card v-show="show.list" class="mx-auto" max-width="800">
        <v-list flat subheader three-line>
          <v-subheader>
            <v-row>
              <v-col class="mt-7"> Lista de Cosas </v-col>
              <v-col v-show="show.buttons">
                <v-btn
                  fab
                  dark
                  color="indigo"
                  x-large
                  class="btn_add"
                  @click="show.createModal = true"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="error"
                  class="btn_clear"
                  title="Eliminar tareas completas"
                  @click="removeDoneTasks()"
                  :class="{'btn_locked':items.length == 0}"
                >
                  <v-icon dark> mdi-minus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-subheader>

          <v-list-item-group v-model="dataList" multiple active-class="">
            <div v-for="(item, index) in items" :key="item.title + index">
              <item
                @deleteItem="deleteItem"
                @editItem="editItem"
                :item="item"
                :index="index"
              ></item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-expand-transition>

    <modalCreateItem
      :showModal="show.createModal"
      @exitModal="show.createModal = false"
    ></modalCreateItem>
    <modalDeleteItem
      :showModal="itemToDeleteIndex != null"
      :index="itemToDeleteIndex"
      @exitModal="exitModal()"
      @deleteItem="deleteItem()"
    ></modalDeleteItem>
    <modalEditItem
      :showModal="show.editModal"
      :data.sync="dataToEdit"
      @exitModal="exitModal()"
    ></modalEditItem>
  </div>
</template>

<script>
import DialogCreateTask from "../Dialogs/CreateTask";
import DialogDeleteTask from "../Dialogs/DeleteTask";
import ListItemComponent from "./ListItemComponent";
import { mapGetters, mapState } from "vuex";
import DialogEditTask from "../Dialogs/EditTask";

export default {
  data() {
    return {
      selectedItems: [],
      itemToDeleteIndex: null,
      dataToEdit: null,
      show: {
        list: false,
        createModal: false,
        deleteModal: false,
        editModal: false,
        buttons:false
      },
    };
  },
  components: {
    item: ListItemComponent,
    modalCreateItem: DialogCreateTask,
    modalDeleteItem: DialogDeleteTask,
    modalEditItem: DialogEditTask,
  },
  beforeMount() {
    this.$store.commit("task/examples");
  },
  mounted() {
    this.show.list = true;
    this.show.buttons = true;
  },
  methods: {
    deleteItem(data) {
      this.itemToDeleteIndex = data.index;
    },
    editItem(data) {
      this.show.editModal = true;
      //necesario para que no haga databinding
      this.dataToEdit = JSON.parse(JSON.stringify(data));
    },
    exitModal() {
      this.itemToDeleteIndex = null;
      this.dataToEdit = null;
      this.show.deleteModal = false;
      this.show.editModal = false;
    },
    removeDoneTasks() {
      this.$store.commit("task/removeDoneTasks");
    },
  },
  computed: {
    ...mapState("task", {
      items: (state) => state.items,
    }),
    ...mapGetters({
      dataList: 'task/getDataList'
    })
  },
};
</script>
<style>
.btn_add {
  margin-left: 312px;
  margin-top: -32px;
  position: fixed;
  z-index: 2;
}
.btn_clear {
  margin-left: 266px;
  margin-top: -18px;
  position: fixed;
  z-index: 1;
  transition: 0.8s;
}

.btn_locked {
  transform: rotate(45deg);
  margin-left: 284px;
  transition: 0.8s;
}
</style>
