// Undo/Redo using javascript

class UndoRedo {

    constructor() {
       this.undoStack = [];
       this.redoStack = [];
    }



performAction(something) {
    this.undoStack.push(something);
    this.redoStack = [];
    console.log( `written: ${something}`);
}



undo() {

  if(this.undoStack.length === 0) return;

  const action = this.undoStack.pop();
  this.redoStack.push(action);
  console.log(`Undo: ${action}`);
}



redo() {
    if (this.redoStack.length === 0) return;

    const action = this.redoStack.pop();
    this.undoStack.push(action);

    console.log(`Redo: ${action}`);

  }


  printCurrent(){
    console.log(`Current: ${this.undoStack.toString()}`);
  }


  getEleIn(index) {  
    
    if (this.undoStack.length === 0 || this.undoStack.length - 1 < index) {
      console.log("Nothing  here...Match this............");
      return;
    }

    console.log(`Its Match Is: '${this.undoStack[index]}' at index ${index}`);

  }

}

const undoRedo = new UndoRedo();
undoRedo.performAction('Hello');
undoRedo.performAction("Array");
undoRedo.performAction("I");
undoRedo.performAction("Kill");
undoRedo.performAction("You");
undoRedo.performAction(3);
undoRedo.performAction("hi");

undoRedo.printCurrent();
undoRedo.undo();
undoRedo.undo();
undoRedo.printCurrent();


undoRedo.redo();
undoRedo.printCurrent();

undoRedo.getEleIn(4);

undoRedo.redo()
undoRedo.printCurrent();
undoRedo.undo();
undoRedo.undo();

undoRedo.printCurrent();
console.log(undoRedo);