<template>
  <div>
    <v-list-item color="green" @click="toggleSelected">
      <template>
        <v-list-item-action>
          <v-checkbox :input-value="item.selected"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            >{{ item.title }}
            <v-btn  class="float-end ml-3"  color="red" elevation="2" icon>
              <v-icon  class="float-right" @click.stop="deleteItem()">mdi-delete</v-icon>
            </v-btn>
             <v-btn  class="float-end"  color="primary" elevation="2" icon>
              <v-icon  class="float-right" @click.stop="editItem()">mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-list-item>
    
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  props: ["item","index"],
  methods: {
    deleteItem(){
      let data = {item:this.$props.item,index:this.$props.index};
      this.$emit('deleteItem',data);
    },
    editItem(){
      let index = this.$props.index;
      let item = this.$props.item;
      let data = {item,index};
      this.$emit('editItem',data);
    },
    toggleSelected(){
      // let isSelected = this.$props.item.selected;
      let index = this.$props.index;
      this.$store.commit('task/toggleSelected',index)
    }
  },
  computed:{
    ...mapState('task',{
      items:  state => state.items 
    }),
    active(){
      return this.$props.item.selected;
    }
  }
};
</script>
