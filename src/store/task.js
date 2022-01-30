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
          let selected = i%2 != 0;
            state.items.push({
              title: `Tarea num. ${i}.`,
              description: "Descripcion de mi tarea",
              selected:selected
            });
          }
      }
    }
  }

export default task;