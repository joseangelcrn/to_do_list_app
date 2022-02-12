import Task from './Classes/Task';

const task = {
    namespaced:true,
    state: { 
        items:[],
        nExamplesLoaded:3
    },
    mutations: {
      add(state,item) {
        state.items.push(item);
      },
      delete(state,index){
          state.items.splice(index,1);
      },
      edit(state,data){
          let index = data.index;
          let updatedItem = data.item;

          state.items[index] = updatedItem;
          
      },
      removeDoneTasks(state){
        state.items = state.items.filter(function(item){
            return !item.selected;
        });
      },
      toggleSelected(state,index){
        state.items[index].selected = !state.items[index].selected;
      },
      examples(state){
        for (let i = 1; i <= state.nExamplesLoaded; i++) {
          let selected = i%2 != 0;
          let title = `Tarea num. ${i}.`;
          let description = "Descripcion de mi tarea";          
          state.items.push(new Task(title,description,selected));
          }
      }
    }
  }

export default task;