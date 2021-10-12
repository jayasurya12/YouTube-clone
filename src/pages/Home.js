import React from 'react'
import Login from '../components/Login/Login'
import Header from '../components/Headers/Header'
import Topics from '../components/Feed/Topics/Topics'
import Sider from '../components/Sider/Sider'
import style from './Home.module.css'
import {useSelector} from 'react-redux'
const Home = () => {
    const state=useSelector((state)=>state.user)
    return (
        <div className={style.homeContainer}>
            {!state ?<Login/>
            :
            <div className={style.home}>
                <Header/>
                <div className={style.body}>
                    <div className={style.sidebar}>
                        <Sider/>  
                    </div>
                    <Topics/>
                </div>
            </div>
            
            }
        </div>
    )
}

export default Home
