import React from 'react'
import style from './Topics.module.css'
import {IconButton} from '@mui/material'
import {KeyboardArrowRight,KeyboardArrowLeft} from '@mui/icons-material';
const Topics = () => {
    return (
        <div className={style.Topics}>
             
           <div className={style.topicsList}>
           <IconButton>
           <KeyboardArrowLeft/>
           </IconButton>
               <p>All</p>
               <p>Sports</p>
               <p>News</p>
               <p>Music</p>
               <p>Science</p>
               <p>Computer</p>
               <p>Story</p>
               <p>Comedy</p>
               <IconButton>
           <KeyboardArrowRight/>
           </IconButton>
           </div>
           
        </div>
    )
}

export default Topics
