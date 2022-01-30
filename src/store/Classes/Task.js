class Task {
  title = null;
  description = null;
  selected = false;

  constructor(title, description, selected = false) 
  {
    this.title = title;
    this.description = description;
    this.selected = selected;
  }


  }


  
  export default Task;