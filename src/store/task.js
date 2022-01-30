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
      examples(state){
          console.log('Filling examples');
        for (let i = 1; i <= state.nExamplesLoaded; i++) {
          let title = `Tarea num. ${i}.`;
          let description = "Descripcion de mi tarea";
          let selected = i%2 != 0;
          
          state.items.push(new Task(title,description,selected));
          }
      }
    }
  }

export default task;