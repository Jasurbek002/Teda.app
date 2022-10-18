import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './card.module.scss'
const Card = () => {
    const [data,setData] = useState([])
    const token = window.localStorage.getItem('token')
    useEffect(() =>{
        fetch('https://profitmodel-server.herokuapp.com/api/product',{
            method:'get',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(res => setData(res.data))
    },[])

    return (
        <div className={styles.Card}>
            {
                data?.map((el) =>{
                    return <div className={styles.Card__items}>
                        <img className={styles.Card__items__img} src={el.photos} alt="" />
                        <h3 className={styles.Card__items__name}>{el.name}</h3>
                        <p className={styles.Card__items__desc}>{el.description}</p>
                         <p className={styles.Card__items__price}>{el.priceList[0].price}</p>
                         <div className={styles.Card__items__btns}>
                            <button className={styles.Card__items__btns__edite}>edite</button>
                            <button className={styles.Card__items__btns__delete}>delete</button>
                         </div>
                    </div>
                })
            }
        </div>
    );
}

export default Card;
