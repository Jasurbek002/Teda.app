import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss'
const Login = () => {

    const navigate = useNavigate()

  
    const phoneRef = useRef()
    const passRef = useRef()

    async function getToken(user){
        console.log(user)
        fetch('https://profitmodel-server.herokuapp.com/api/auth/login',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.data){
                window.localStorage.setItem('token',res.data)
                navigate('/')
            }
          
        })
        .catch(err => console.log(err))
    
    }
        


    const hendlerClick = () =>{
        getToken({
            phone:phoneRef.current.value,
            password:passRef.current.value
        })
    }

    return (
        <div className={styles.Login}>
            <div className={styles.Login__box}>
            <h1 className={styles.Login__box__title}>Login</h1>
            <input  ref={phoneRef} placeholder='username...' className={styles.Login__box__name} type="text" />
            <input ref={passRef} placeholder='password...' className={styles.Login__box__pass} type="text" />
            <button onClick={hendlerClick} className={styles.Login__box__btn}>Login</button>
        </div>
        </div>
    );
}

export default Login;
