import {FC,ReactElement,useContext} from 'react'
import {Mycontext} from "../Test1";
const Childrencontext: FC = ():ReactElement =>{
    let num = useContext(Mycontext)
    return (
        <div>
            asd奥术大师大所多
            <h2>{num}</h2>
        </div>
    )
}
export default Childrencontext