// import {Router, Switch, Route, Redirect,useHistory} from 'react-router-dom'
import {Router, Route, Switch, Redirect,useHistory } from "react-router-dom" //引入react路由相关
import {createBrowserHistory} from 'history'
import Login from "../views/Login/Login";
import Home from '../views/Home/index'
import Todolist from "../views/Todolist/index";

function CreateRouter() {
    const history = createBrowserHistory()
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/Login'/>}/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/todolist' component={Todolist}/>
            </Switch>
        </Router>
    )
}

export default CreateRouter