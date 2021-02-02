import React, {FC, useState,createContext} from 'react'
import Childrencontext from "../children_Context";
export const  Mycontext = createContext("")
const Test1: FC = () => {
    const [arr, setarr] = useState([1, 2, 3])
    const [num,setnum] = useState('10')

    return (
        <div>
            <Mycontext.Provider value={num}>
                <h2>{arr}啊啊啊啊</h2>
                <button onClick={() => {
                    setarr(()=> {
                        arr.push(4)
                        return [...arr]
                    })
                }}>ArrTest
                </button>
                <Childrencontext/>
            </Mycontext.Provider>
        </div>
    )
}

export default Test1