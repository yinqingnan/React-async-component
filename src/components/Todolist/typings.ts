export interface Itodo{
    id: string;
    value: string;
    completed: boolean;
}

export interface Istate {
    todolist: Itodo[]
}

export enum TodoAction {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    // TOGGLE_TODO = 'toggleTodo'
}

export interface Iaction {
    type:TodoAction;
    payload: Itodo | string
}