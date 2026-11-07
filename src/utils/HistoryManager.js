export default class HistoryManager{
    constructor(onChange){
        this.undoStack = []
        this.redoStack = []
        this.onChange = onChange
    }

    save(state){
        this.undoStack.push(JSON.stringify(state))
        this.redoStack = []
    }

    undo(){
        if(this.undoStack.length <= 1) return;

        const current = this.undoStack.pop()
        this.redoStack.push(current)

        const prev = JSON.parse(this.undoStack[this.undoStack.length - 1])
        this.onChange(prev)
    }

    redo(){
        if(this.redoStack.length === 0) return;

        const next = this.redoStack.pop()
        this.undoStack.push(next)

        this.onChange(JSON.parse(next))
    }
}