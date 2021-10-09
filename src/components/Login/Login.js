import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import style from './Login.module.css'
import { Button } from '@mui/material';
import {auth,provider} from '../../firebase'
import {useDispatch} from 'react-redux'
import {User} from '../../store/Action/Action'
const Login = () => {
    const dispatch=useDispatch()
        const signinClick=()=>{
            auth.signInWithPopup(provider)
            .then((data)=>{
                dispatch(User(data.user.multiFactor.user));
            })
            .catch(error=>console.log(error))
        }
    return (
        <div className={style.Login}>
            <div>
                <YouTubeIcon/>
                <p>YouTube</p>
            </div>
            <Button onClick={signinClick} className={style.button}>
                Login
                <img alt='' src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'}/>
            
            </Button>
        </div>
    )
}

export default Login
