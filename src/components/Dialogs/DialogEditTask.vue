<template>
  <v-dialog v-model="display" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Editar Task</span>
      </v-card-title>
      <v-card-text>
        <v-container v-if ="data">
          <v-row>
            <v-col cols="12">
              <v-alert dense type="warning" v-show="this.alert.show">
                {{ this.alert.message }}
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Titulo*"
                required
                v-model="data.item.title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Descripcion"
                v-model="data.item.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="exitModal()"> Cerrar </v-btn>
        <v-btn color="blue darken-1" text @click="updateData()"> Actualizar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    alert: {
      show: false,
      message: null,
    },
    dataBackup: null,
  }),
  props: ["showModal", "data"],
  computed: {
    display() {
      return this.$props.showModal;
    },
  },
  methods: {
    exitModal() {
      this.$emit("exitModal", true);
    },
    updateData(){
      this.$store.commit('task/edit',this.$props.data);
      this.exitModal();
    }
  },
  mounted() {
  },

};
</script>
