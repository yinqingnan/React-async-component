import {FC, useState, useEffect,ReactElement} from "react"
import {Router, Route, Switch, Redirect,useHistory } from "react-router-dom" //引入react路由相关
import axios from "axios"
const Home: FC = () : ReactElement => {
    let history = useHistory()
    const routerswitch = (str: String): void => {
        history.push(`/home/${str}`)
        document.title = `/${str}`
    }
    let [routerlist, setlist] = useState([])
    const runrouter = (): any => {
        axios.get("/navlist").then((res) => {
            res.data.data.map((el: any) => {
                el.component = require(`../${el.component}`).default
            })
            setlist(routerlist=res.data.data)
            console.log(routerlist)
        })
    }
    useEffect(() => {
        runrouter()
    },[])
    return (
        <div>

            <hr/>
            <ul>
                <li
                    onClick={() => {
                        routerswitch("atest1")
                    }}>
                    atest1
                </li>
                <br/>
                <li
                    onClick={() => {
                        routerswitch("btest2")
                    }}>
                    btest2
                </li>
                <br/>
                <li
                    onClick={() => {
                        routerswitch("ctest3")
                    }}>
                    ctest3
                </li>
            </ul>
            <br/>
            <div>
                <Router history={history}>
                    <Switch>
                    <Route path='/' exact render={() => <Redirect to='/home'/>}/>
                    {
                        routerlist.map((item: any) => {
                            return (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    component={item.component}
                                />
                            )
                        })
                    }
                    </Switch>
                </Router>
            </div>

        </div>
    )
}
export default Home
