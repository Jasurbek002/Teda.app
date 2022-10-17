import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AuthProvider = ({children}) => {
    const [token,setToken] = useState(window.localStorage.getItem('token'))
    const navigete = useNavigate()
    useEffect(() =>{
      if(!token && token === null){
        navigete('/login')
      }
    },[token])
    return (
        <>
           {
             children
           } 
        </>
    );
}

export default AuthProvider;
