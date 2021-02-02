import {FC, ReactElement, useCallback, useEffect, useReducer, useState} from 'react'
import Todolistzj from "../../components/Todolist";
import {Itodo, Istate, TodoAction} from "../../components/Todolist/typings";
import {todoReducer} from "../../components/Todolist/todoRedicer";

const Todolist: FC = (): ReactElement => {
    /*
    * todo useReducer 的用法和意义 相对于 useState 更高级的解决方案
    *
    * todo useReducer惰性初始化值 使用惰性初始化时需要传入第三个参数， 为初始化值的函数
    *  usereducer用法
    * */
    // const initialState: Istate = {
    //     todolist: []
    // }
    //
    function inittodolist (initTodolist: Itodo[]): Istate {
        return {
            todolist: initTodolist
        }
    }
    // 在创建reducer 时就会创建对应的 初始化值
    const [state, dispath] = useReducer(todoReducer, [],inittodolist)
    //todo 建议，如果子组件中的函数方法是从父组件中传递过来的话， 就需要使用useCallback()  进行包裹一下， useCallback需要两个参数，第二个默认传空数组
    const addTodo = useCallback((obj: Itodo) => {
        dispath({
            type: TodoAction.ADD_TODO,
            payload:obj
        });
    }, [])
    const dltTodos = useCallback((id: string) => {
        dispath({
            type: TodoAction.REMOVE_TODO,
            payload:id as string
        });
    },[])
    useEffect(() => {
        console.log(state.todolist)
    }, [state.todolist])
    return (
        <div>
            <Todolistzj addTodo={addTodo} Todolist={state.todolist} dltTodo={dltTodos}/>
        </div>
    )
}
export default Todolist