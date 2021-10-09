import React from 'react'
import style from './Sider.module.css'
import {HomeOutlined,ExploreOutlined,
    SubscriptionsOutlined,VideoLibraryOutlined,History,
SmartDisplayOutlined,WatchLaterOutlined,ThumbUpOutlined,
ExpandMoreOutlined,AddCircleOutlineOutlined,YouTube,
LocalMoviesOutlined,SportsEsportsOutlined,Sensors,
LightbulbOutlined,SettingsOutlined,
OutlinedFlag,HelpOutlineOutlined, FeedbackOutlined} from '@mui/icons-material'
import { Avatar } from '@mui/material'
const Sider = () => {
    return (
        <div className={style.sider}>
            <section className={style.siderFirst}>
                <div><HomeOutlined/><p>Home</p></div>
                <div><ExploreOutlined/><p>Explore</p></div>
                <div><SubscriptionsOutlined/><p>Subcriptions</p></div>
            </section>
            <section className={style.siderSecond}>
                <div><VideoLibraryOutlined/><p>Library</p></div>
                <div><History/><p>History</p></div>
                <div><SmartDisplayOutlined/><p>Your Videos</p></div>
                <div><WatchLaterOutlined/><p>Watch Later</p></div>
                <div><ThumbUpOutlined/><p>Liked Videos</p></div>
                <div><ExpandMoreOutlined/><p>Show more</p></div>
            </section>
            <section className={style.siderThird}>
                <p>SUBSCRIPTIONS</p>
                <div>
                <Avatar 
                src={'https://yt3.ggpht.com/ytc/AKedOLTPi1IhxPxwLfFWNrRogE5hpQpSScO5m1d92Eof=s88-c-k-c0x00ffffff-no-rj'}/>
                <p>Alagi Health & Beauty</p>
                </div>
                <div>
                <Avatar 
                src={'https://yt3.ggpht.com/42f4O-tN4ZCNZfDuuq4Dto8x-MgbbJj5JqEXYlxaGt6gjO-JtTl4ilpSoSRzXWwouqP_xLk=s88-c-k-c0x00ffffff-no-rj'}/>
                <p>Anton Francis Jeejo</p>
                </div>
                <div>
                <Avatar 
                src={'https://yt3.ggpht.com/ytc/AKedOLRJnFAO-agBUeQ64WdckQjVysBnJrmNttiSgaCkiA=s88-c-k-c0x00ffffff-no-rj'}/>
                <p>Village Cooking Channel</p>
                </div>
                <div>
                <Avatar 
                src={'https://yt3.ggpht.com/g-Gefa1yC1WWrssKsnx0mUuOuOiNjprr4gM6tf1sWDaPV1wAR2cVT0iryor0Ttxhj9litZ6vNw=s88-c-k-c0x00ffffff-no-rj'}/>
                <p>Mr GK</p>
                </div>
                <div>
                    <AddCircleOutlineOutlined/>
                    <p>Browse channels</p>
                </div>
            </section>
            <section className={style.siderFour}>
                <p>MORE FOR YOUTUBE</p>
                <div>
                    <YouTube/>
                    <p>YouTube Premimum</p>
                </div>
                <div>
                    <LocalMoviesOutlined/>
                    <p>Movies</p>
                </div>
                <div>
                    <SportsEsportsOutlined/>
                    <p>Gaming</p>
                </div>
                <div>
                    <Sensors/>
                    <p>Live</p>
                </div>
                <div>
                    <LightbulbOutlined/>
                    <p>Learning

                    </p>
                </div>
            </section>
            <section className={style.siderFive}>
                <div>
                    <SettingsOutlined/>
                    <p>Setting</p>
                </div>
                <div>
                    <OutlinedFlag/>
                    <p>Report history</p>
                </div>
                <div>
                    <HelpOutlineOutlined/>
                    <p>Help</p>
                </div>
                <div>
                    <FeedbackOutlined/>
                    <p>Send feedback</p>
                </div>
            </section>
            <section className={style.siderFooter}>
                    <div className={style.footerFirst}>
                        <p>About</p>
                        <p>Press</p>
                        <p>Copyright</p>
                    </div>
                   <div className={style.footerSecond}>
                    <p>Contact us</p>
                    <p>Creators</p>
                    </div>
                    <div className={style.footerThird}>
                    <p>Advertise</p>
                    <p>Developer</p>
                    </div>
                    <div className={style.footerFour}>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Policy & Saftey</p>
                    </div>
                    <div className={style.footerFive}>
                        <p>How YouTube works</p>
                    </div>
                    <div className={style.footerSix}>
                        <p>Test new features</p>
                    </div>
                    <div className={style.copyRights}>
                        <p>&#169; 2021 Google LLC</p>
                    </div>
            </section>
        </div>
    )
}

export default Sider
