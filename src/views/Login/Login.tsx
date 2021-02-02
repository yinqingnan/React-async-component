import React, {FC, useState} from 'react'
import classnames from 'classnames'
import LoginForm from '../../components/LogoForm/LogoForm'
import RegisterForm from '../../components/registerForm/registerForm'

const Login: FC = (propsprops) => {
    const [isshow, setisshow] = useState(false)
    const classes = classnames('container', {
        'sign-up-mode': isshow
    })
    const handleClick = () => {
        setTimeout(() => {
            setisshow(!isshow)
        }, 500)
    }
    const isshowForm = (): any => {
        if (!isshow) {
            return <LoginForm/>
        } else {
            return <RegisterForm/>
        }
    }
    /*
     const colors = ['#FFB6C1', '#DB7093', '#4B0082', '#9370DB', '#778899', '#00CED1', '#00FF00']
     const btnswitch = (color: string) => {
         (window as any).less
             .modifyVars(
                 {
                     '@primary-color': color,
                     '@link-color': color,
                     '@btn-primary-bg': color,
                 }
             )
             .then(() => {
             })
             .catch((error: any) => {
                 console.log(error);
             });
     }
    */
    return (
        <div className={classes}>
            <div className="forms-container">
                <div className="signin-signup">
                    {isshowForm()}
                </div>
                <div className="panels-container">
                    <div className='panel left-panel'>
                        <div className="content">
                            <h3>今天所有的一切，不过是过眼云烟。从明天开始你会一无是处。</h3>
                            <p>Follow your heart</p>
                            <button className="btn transparent" onClick={handleClick}>注册</button>
                            {/*{*/}
                            {/*    colors.map(color => {*/}
                            {/*        return <button style={{color}} key={color}*/}
                            {/*                       onClick={() => btnswitch(color)}>{color}颜色</button>*/}
                            {/*    })*/}
                            {/*}*/}
                        </div>
                        <img src='../img/log.svg' className='image' alt=''/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>以人为镜，可明得失；以代码为镜，则逻辑皆通</h3>
                            <p>生活磨光你的棱角，是为了让你，滚的更远。</p>
                            <button className="btn transparent" onClick={handleClick}>登录</button>
                        </div>
                        <img src="../img/register.svg" className='image' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login