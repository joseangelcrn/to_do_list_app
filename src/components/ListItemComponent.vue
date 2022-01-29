<template>
  <div>
    <v-list-item color="green" >
      <template v-slot:default="{ active }">
        <v-list-item-action>
          <v-checkbox :input-value="active"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            >{{ item.title }}
            <v-btn  class="float-end"  color="red" elevation="2" icon>
              <v-icon  class="float-right" @click.stop="deleteItem()">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-list-item>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item","index"],
  methods: {
    deleteItem(){
      let data = {item:this.$props.item,index:this.$props.index};
      this.$emit('deleteItem',data);
      console.log('Delete Item!!');
    }
  },
};
</script>
