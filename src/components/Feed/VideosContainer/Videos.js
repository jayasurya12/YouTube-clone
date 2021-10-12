import React from 'react'
import style from './Videos.module.css';
const Videos = ({image,channelIcon,channelName,views,uploadDays,title,link}) => {

    return (
        <div className={style.video}>
            <div className={style.videoCard}>
                <img alt='' src={image}/>
                <p className={style.titleContainer}> 
                    <img src={channelIcon} alt=""/>
                    <a href={link}>
                        <p className={style.title}>{title}</p>
                    </a>    
                </p>
            <p className={style.channelName}>{channelName}</p>
            <div className={style.views}>
                <p>{views}<span> . </span>{uploadDays}</p>                    
            </div>
            </div>
        </div>
    )
}

export default Videos
