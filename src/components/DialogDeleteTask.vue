<template>
  <v-dialog v-model="display" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">¿Estas seguro que quieres eliminar la tarea {{item.title}}?</span>
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
    item: {
      title: null,
      description: null,
    },
  }),
  props: ["showModal"],
  computed: {
    display() {
      return this.$props.showModal;
    },
  },
  methods: {
    deleteItem(data) {
        console.log("dialog delete !!");
        console.log(data);
      if (this.item.title) {
        console.log(this.item);
        this.$emit("deleteItem", this.item);
        this.resetItem();
      }
    },
    resetItem() {
      console.log("reset item!!");
      this.item = {
        title: null,
        description: null,
      };
    },

    exitModal() {
      this.$emit("exitModal", true);
      this.resetItem();
    },
  },
  mounted() {},
};
</script>
