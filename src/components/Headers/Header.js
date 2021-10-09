import React from 'react'
import style from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {Avatar} from '@mui/material'
import { IconButton } from '@mui/material';
import {useSelector} from 'react-redux'
const Header = () => {
    const state=useSelector((state)=>state.user)
    console.log(state);
    return (
        <div className={style.header}>
            <section className={style.headerLeft}>
               <div className={style.menu}>
               <MenuIcon/>
               </div>
                <YouTubeIcon/>
                <p>YouTube</p>
                <span>IN</span>
            </section>
            <section className={style.headerCenter}>
                <div className={style.search}>
                    <input type='text' placeholder='Search'/>
                   <SearchIcon/>
                </div>
                <IconButton>
                <MicOutlinedIcon/>
                </IconButton>
            </section>
            <section className={style.headerRight}>
                <div>
                <IconButton><VideoCallOutlinedIcon/></IconButton>
                <IconButton><AppsOutlinedIcon/></IconButton>
                <IconButton><NotificationsNoneOutlinedIcon/></IconButton>
                <Avatar src={state.photoURL}/>
                </div>
            </section>
        </div>
    )
}

export default Header
