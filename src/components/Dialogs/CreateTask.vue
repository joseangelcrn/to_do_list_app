<template>
  <v-dialog v-model="display" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Nueva cosa que hacer</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-alert dense type="warning" v-show="this.alert.show">
               {{this.alert.message}}
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Titulo*"
                required
                v-model="item.title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Descripcion"
                v-model="item.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="exitModal()"> Cerrar </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="saveItem()"
          v-on:keyup.enter="saveItem()"
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import Task from "../../store/Classes/Task";

export default {
  name:'CreateTask',
  data: () => ({
    item: new Task(),
    alert:{
      show:false,
      message:null
    }
  }),
  props: ["showModal"],
  computed: {
    display() {
      return this.$props.showModal;
    },
  },
  methods: {
    saveItem() {
      if (this.item.title) {
        this.$store.commit("task/add", this.item);
        this.exitModal();
      }
      else{
        this.alert.message = 'Debes de ponerle un titulo a la tarea antes de guardarla.'
        this.alert.show = true;
      }
    },
    resetItem() {
      this.item = new Task();
    },
    resetAlert(){
      this.alert.show = false;
    },
    exitModal() {
      this.resetAlert();
      this.$emit("exitModal", true);
      this.resetItem();
    },
  },
  mounted() {},
};
</script>
