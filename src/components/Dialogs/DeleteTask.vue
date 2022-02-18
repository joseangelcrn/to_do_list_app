<template>
  <v-dialog v-model="display" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">¿Estas seguro que quieres eliminar la tarea?</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="deleteItem()"> Si </v-btn>

        <v-btn color="blue darken-1" text @click="exitModal()"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
   
  }),
  props: ["showModal","index"],
  computed: {
    display() {
      return this.$props.showModal;
    },
  },
  methods: {
    deleteItem() {
     this.$store.commit('task/delete',this.$props.index);
     this.$emit('exitModal',true);
    },
    exitModal() {
      this.$emit("exitModal", true);
    },
  },
  mounted() {},
};
</script>
