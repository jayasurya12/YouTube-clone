import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import style from './Login.module.css'
import { Button } from '@mui/material';
const Login = () => {
    return (
        <div className={style.Login}>
            <div>
                <YouTubeIcon/>
                <p>YouTube</p>
            </div>
            <Button>
                SIGNIN WITH GOOGLE
                <img alt='' src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'}/>
            
            </Button>
        </div>
    )
}

export default Login
