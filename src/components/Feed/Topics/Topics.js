import React,{useState} from 'react'
import  './Topics.css'
import {IconButton,Grid} from '@mui/material'
import {KeyboardArrowRight,KeyboardArrowLeft} from '@mui/icons-material';
import Videos from '../VideosContainer/Videos'

const Topics = () => {
    const [topics, setTopics]=useState("all")
    return (
        <div className="Topics">
           <div className="topicsList">
           <IconButton>
           <KeyboardArrowLeft/>
           </IconButton>
               <p className={`topics_option ${topics === "all" ? "topics_select":null}`}
               onClick={()=>setTopics("all")}>All</p>
               <p className={`topics_option ${topics === "sports" ? "topics_select":null}`}
               onClick={()=>setTopics("sports")}>Sports</p>
               <p className={`topics_option ${topics === "news" ? "topics_select":null}`}
               onClick={()=>setTopics("news")}>News</p>
               <p className={`topics_option ${topics === "music" ? "topics_select":null}`}
               onClick={()=>setTopics("music")}>Music</p>
               <p className={`topics_option ${topics === "science" ? "topics_select":null}`}
               onClick={()=>setTopics("science")}>Science</p>
               <p className={`topics_option ${topics === "mystery" ? "topics_select":null}`}
               onClick={()=>setTopics("mystery")}>Mysteries</p>
               <p className={`topics_option ${topics === "computer" ? "topics_select":null}`}
               onClick={()=>setTopics("computer")}>Computer</p>
               <p className={`topics_option ${topics === "story" ? "topics_select":null}`}
               onClick={()=>setTopics("story")}>Story</p>
               <p className={`topics_option ${topics === "flim" ? "topics_select":null}`}
               onClick={()=>setTopics("flim")}>Flim</p>
               <p className={`topics_option ${topics === "comedy" ? "topics_select":null}`}
               onClick={()=>setTopics("comedy")}>Comedy</p>
               <p className={`topics_option ${topics === "live" ? "topics_select":null}`}
               onClick={()=>setTopics("live")}>Live</p>
               <p className={`topics_option ${topics === "editing" ? "topics_select":null}`}
               onClick={()=>setTopics("editing")}>Editing</p>
               <IconButton>
           <KeyboardArrowRight/>
           </IconButton>
           </div>
            <div className="videoContainer">
            <Videos image={"https://url-shortners1.herokuapp.com/LXCK1cEcE"}
                channelIcon={'https://url-shortners1.herokuapp.com/fvrx2qE-j'}
                channelName={"Simply Tech"}
                views={"1M views"} uploadDays={"29 days ago"}
                title={"Google's Plan To Create The World's First Quantum"}
                link={'https://www.youtube.com/watch?v=9o-3HBvibYg'}/>

            <Videos image={"https://url-shortners1.herokuapp.com/esLdqX9PP"}
            channelName={"movie juntion"}
            channelIcon={'https://yt3.ggpht.com/ytc/AKedOLRklt8EC70dklqfLj2j1qE3zOubvbHFc446JoLcqw=s68-c-k-c0x00ffffff-no-rj'}
            title="கடுப்பு ஏத்தறாங்க மை லார்ட்#வடிவேலு வண்டுமுருகன் காமெடிகலாட்டா#தமிழ் காமெடி" href="/watch?v=DL2QPmdAuPU"
            views={" 2.8M views"} uploadDays={"1 year ago"}
            link={'https://www.youtube.com/watch?v=DL2QPmdAuPU'}
            />

            <Videos image={"https://url-shortners1.herokuapp.com/GNPyNBx-6"}
            channelIcon={'https://yt3.ggpht.com/ytc/AKedOLRTTFZaCTVR0a7p09S3mHreGXMc_fvLnnpXT5jR=s68-c-k-c0x00ffffff-no-rj'}
            channelName={"Parithabangal"} link={"https://www.youtube.com/watch?v=XLOE-sae9Hw&t=2s"}
            title={"Delivery Paavangal 2 | Parithabangal"}views={'1.3 M views'} uploadDays={"3 days ago"}/>
            <Videos image={'https://i.ytimg.com/vi/195RY7jCuZg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNDxKsKLa8Q3-tKO8vKdT8C7GNqA'}
            channelName={"DesignSense"}
            title={"Food App Design | UX/UI (Wireframe, Prototype, Export)"}
            link={"https://www.youtube.com/watch?v=195RY7jCuZg"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLQ-aB06HhhA8J0VN0zd6hU-BTtcxtfm3D-cFarGLg=s68-c-k-c0x00ffffff-no-rj"}
            views={"520K views"} uploadDays={"1 year ago"}/>

            <Videos image={"https://i.ytimg.com/an_webp/GJWbC1U8-7c/mqdefault_6s.webp?du=3000&sqp=COvplYsG&rs=AOn4CLDTVhINdXoWhoNLH-fGYOryRL3fYw"}
            channelName={"Mr Gk"}
            channelIcon={'https://yt3.ggpht.com/g-Gefa1yC1WWrssKsnx0mUuOuOiNjprr4gM6tf1sWDaPV1wAR2cVT0iryor0Ttxhj9litZ6vNw=s68-c-k-c0x00ffffff-no-rj'}
            title={'Secret Behind Numbers 3,6,9 Tesla Code |Nikola Tesla in Tamil |Mr.Gk'}
            link={"https://www.youtube.com/watch?v=GJWbC1U8-7c"}
            views={"1M views"} uploadDays={"2 years ago"}/>
            <Videos image={"https://i.ytimg.com/an_webp/z_9mqGnAwNc/mqdefault_6s.webp?du=3000&sqp=COSQlosG&rs=AOn4CLAjZJTaL_cBVG6LYu_bGXtvzpHTbQ"}
            channelIcon={'https://yt3.ggpht.com/ytc/AKedOLR4v4nR0EOMqy61M1T9kXADJVePpO3JN8qoNzWmvQ=s68-c-k-c0x00ffffff-no-rj'}
            channelName={'Classic Mr Bean'}
            title={"Mr Bean on the Town | Full Episodes | Classic"}
            views={"23M views"} uploadDays={"1 years"}
            link={"https://www.youtube.com/watch?v=z_9mqGnAwNc"}/>
            <Videos image={"https://i.ytimg.com/vi/mK53d6aIG48/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxQfGun3xainGlb5aaRGvCS7MBOw"}
            title={"ENGLISH SPEECH | R.MADHAVAN:India in 2030 (English Subtitle)"}
            views={"2.1M views"}uploadDays={"2 years ago"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLTjiRybuAJri7y_Cts9lNCaUMYpBRJzecPVJnZELA=s68-c-k-c0x00ffffff-no-rj"}
            channelName={"English Speeches"}
            link={"https://www.youtube.com/watch?v=mK53d6aIG48&t=119s"}/>

            <Videos image={"https://i.ytimg.com/vi/TFJwUwnShnA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCe_J0_oihqW2PUUZQ6G1tXZ4PuQ"}
            link={"https://www.youtube.com/watch?v=TFJwUwnShnA"}
            channelName={"Netflix"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj"}
            title={"Money Heist: Part 3 | Official Trailer | Netflix"}
            views={"8.8M views"}uploadDays={"2 years ago"}/>
        
            <Videos image={"https://i.ytimg.com/vi/WInTHMAj2ZU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhXNU82wkHZVz_DJ6m5CqTjstP4A"}
            link={"https://www.youtube.com/watch?v=WInTHMAj2ZU"}
            channelName={"Vehicle Virgins"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLRHzA2fzuAq0H9WHF4tg0WVDRvOCT68Hok-MzFcNA=s68-c-k-c0x00ffffff-no-rj"}
            title={"Tesla Model S Plaid POV Drive Review *0-60mph 1.9s!!*"}
            views={"748K views views"}uploadDays={"1 month ago"}/>
            
            <Videos image={"https://i.ytimg.com/vi/dMGRTR97Ito/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoYnRGTi-fy6fOqXd_3MYR7yYlxg"}
            link={"https://www.youtube.com/watch?v=TFJwUwnShnA"}
            channelName={"cricket.com.au"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLSaliAXEasGek2J2eYdjkofH1rvdqZ4V320tT-NVRU=s68-c-k-c0x00ffffff-no-rj"}
            title={"Pandya's power seals series win for India with epic chase | Dettol T20| Series 2020"}
            views={"57M views"}uploadDays={"10 months ago"}/>

            <Videos image={"https://i.ytimg.com/vi/mmldS5ztuWo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBEGFcUZz4hI9YzfKY56fA_GXO4g"}
            link={"https://www.youtube.com/watch?v=mmldS5ztuWo"}
            channelName={"Anton Francis Jeejo"}
            channelIcon={"https://yt3.ggpht.com/42f4O-tN4ZCNZfDuuq4Dto8x-MgbbJj5JqEXYlxaGt6gjO-JtTl4ilpSoSRzXWwouqP_xLk=s88-c-k-c0x00ffffff-no-rj"}
            title={'Build a Movie App UI in React Native - For Beginner'}
            views={"2.5K views"}uploadDays={"4 months ago"}/>

            <Videos image={"https://i.ytimg.com/vi/AGBjI0x9VbM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmzc6HmV-8LBSedfhTXChDBme-GQ"}
            link={"https://www.youtube.com/watch?v=AGBjI0x9VbM"}
            channelName={"WB Kids"}
            channelIcon={"https://yt3.ggpht.com/ytc/AKedOLQgOSA1VHw2sk1iyncECvCtekvLFZqOgfDKM5mjrQ=s68-c-k-c0x00ffffff-no-rj"}
            title={"Tom & Jerry | Best of Little Quacker | Classic Cartoon Compilation | WB Kids"}
            views={"576M views"}uploadDays={"3 years ago"}/>
            </div>
           
        </div>
    )
}

export default Topics
