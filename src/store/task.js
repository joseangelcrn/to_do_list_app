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
      examples(state){
          console.log('Filling examples');
        for (let i = 1; i <= state.nExamplesLoaded; i++) {
          let title = `Tarea num. ${i}.`;
          let description = "Descripcion de mi tarea";          
          state.items.push(new Task(title,description,false));
          }
      }
    }
  }

export default task;