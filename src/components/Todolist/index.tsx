import {FC, ReactElement, useRef} from 'react'
import {Itodo} from "./typings";
interface Iprops {
    addTodo: (todo: Itodo) => void;
    Todolist: Itodo[];
    dltTodo: (id: string) => void
}
const Todolistzj :FC<Iprops> = ({Todolist,addTodo,dltTodo}): ReactElement => {
    const inputref = useRef<HTMLInputElement>(null)
    const getvalue = (): void => {
        let val = inputref.current!.value.trim()
        if(val.length){
            let isExist = Todolist.find( todo => todo.value === val)
            if(isExist){
                alert('已存在')
                return
            }
            addTodo({
                id:new Date().getTime() + '',
                value:val,
                completed:false
            })
            inputref.current!.value = ''
            inputref.current!.focus()
        }
    }
    const DltTodolist = (id: string) : void =>{
        dltTodo(id)
    }
    const styles ={
        height:'40px',
        color:'skyblue',
        lineHeight:'40px',
        cursor:'pointer',
    }
    return (
        <div>
            <input type="text" ref={inputref} placeholder={'添加备忘'}/>
            <ul>
                {
                    Todolist.map(item => {
                        return (
                            <li style={styles} key={item.id} onClick={()=>{DltTodolist(item.id)}}>{item.value}</li>
                        )
                    })
                }
            </ul>

            <br/>
            <button onClick={getvalue}>获取当前输入值</button>
        </div>
    )
}
export default Todolistzj