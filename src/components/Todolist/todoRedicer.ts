import {Iaction, Istate, Itodo, TodoAction} from "./typings";

function todoReducer(state: Istate, action: Iaction): Istate {
    const {type, payload} = action
    switch (type) {
        case TodoAction.ADD_TODO:
            return {
                ...state,
                todolist: [...state.todolist, payload as Itodo]
            }
        case TodoAction.REMOVE_TODO:
            return {
                ...state,
                todolist: state.todolist.filter(item => item.id !== payload as string)
            }
        // case TodoAction.TOGGLE_TODO:
        //     return {
        //         ...state,
        //         todolist: state.todolist.map(item => {
        //             return item.id === payload ?
        //                 {
        //                     ...item,
        //                     completed: !item.completed
        //                 } :
        //                 {
        //                     ...item
        //                 }
        //         })
        //     }
        default:
            return state
    }
}

export {
    todoReducer
}