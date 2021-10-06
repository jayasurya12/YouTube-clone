import React from 'react'
import Login from '../components/Login/Login'
import Header from '../components/Headers/Header'
import Sider from '../components/Sider/Sider'
import style from './Home.module.css'
import {useSelector} from 'react-redux'
const Home = () => {
    const state=useSelector((state)=>state.user)
    return (
        <div className={style.homeContainer}>
            {!state ?<Login/>
            :
            <div>
                <Header/>
                <Sider/>
            </div>
            }
        </div>
    )
}

export default Home
