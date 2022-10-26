import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './card.module.scss'

const Card = ({ padding , setModal ,setPutId,setToos,setMessage}) => {
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
    },[data])

    const deleteProduct = async (id) =>{
      let response = await fetch(`https://profitmodel-server.herokuapp.com/api/product/${id}`,{
            method:'delete',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        response = await response.json()
        setMessage(response.message)
        setToos(true)
        setTimeout(() =>{
            setToos(false)
        },5000)
    }

    const putProduct = (id) =>{
        setModal(true)
        setPutId(id)
      
    }

    return (
        <div style={{paddingRight:`${padding}px`}} className={styles.Card}>
            {
                data?.map((el,index) =>{
                  
                    return <div key={index} className={styles.Card__items}>
                        <img className={styles.Card__items__img} src={`https://profitmodel-server.herokuapp.com/api/product/${el.id}/photo/${el.photos[0].id}`} alt="card-img" />
                        <p className={styles.Card__items__price}>{el.priceList[0].price} so'm</p>

                        <h3 className={styles.Card__items__name}>{el.name}</h3>
                        <p className={styles.Card__items__blok__desc}>{el.description}</p>
                  
                         <div className={styles.Card__items__btns}>
                            <button onClick={(e) => putProduct(e.target.value)} value={el.id} className={styles.Card__items__btns__edite}>edite</button>
                            <button onClick={(e)=> deleteProduct(e.target.value)} value={el.id} className={styles.Card__items__btns__delete}>delete</button>
                         </div>
                    </div>
                })
            }
        </div>
    );
}

export default Card;
