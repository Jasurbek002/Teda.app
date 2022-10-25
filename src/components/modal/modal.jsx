import React, { useEffect, useState } from 'react';
import styles from './modal.module.scss'
import xicon from '../../assets/58253.png'
import upload from '../../assets/upload.png'

const Modal = ({setModal,putId}) => {
       console.log(putId)
    const token = window.localStorage.getItem('token')
    const [message,setMessage] = useState('')
    const [category,setCatgeory] = useState([])
    const [brand,setBrand] = useState([])
    const [measurement,setMeasurement] = useState([])

 
  

    useEffect(() =>{
        fetch('https://profitmodel-server.herokuapp.com/api/category',{
            method:'get',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(res =>setCatgeory(res) )
    },[])

    useEffect(() =>{
        fetch('https://profitmodel-server.herokuapp.com/api/brand',{
            method:'get',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(res =>setBrand(res) )
    },[])

    useEffect(() =>{
        fetch('https://profitmodel-server.herokuapp.com/api/measurement',{
            method:'get',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(res =>setMeasurement(res) )
    },[])


    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [discount,setDiscount] = useState(0)
    const [categoryId,setCategoryId] = useState(0)
    const [brandId,setBarndId] = useState(0)
    const [measurementId,setMeasurementId] = useState(0)
    const [codeList,setCodeList] = useState(0)
    const [priceList,setPriceList] = useState(0)
    const [priceType,setPriceType] = useState('')
    const [photos,setPhotos] = useState()

   

    

   const addProduct = async () =>{

    const formData = new FormData()
    formData.append("name",name);
    formData.append("description", description);
    formData.append("discount", discount);
    formData.append("categoryId", categoryId);
    formData.append("brandId", brandId);
    formData.append("measurementId", measurementId);
    formData.append("codeList[0]", codeList);
    formData.append("priceList[0].type", priceList);
    formData.append("priceList[0].price", priceType);
    formData.append("photos[0]",photos,photos.type)
     
         fetch('https://profitmodel-server.herokuapp.com/api/product'+ putId ? putId : '',{
            method: putId ? 'put' : 'post',
            headers:{
                'Contenet-type':'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body:formData
        })
        .then(res => res.json())
        .then(res => console.log(res))
    
   }

    


    return (
        <div className={styles.Modal}>
       
            <button className={styles.Modal__close} onClick={() => setModal(false)}><img src={xicon} /></button>
            <input placeholder='product name' onChange={(e) => setName(e.target.value) } className={styles.Modal__input} type="text" />
            <input placeholder='description' onChange={(e) => setDescription(e.target.value) } className={styles.Modal__input} type="text" />
            <input placeholder='discount' onChange={(e) => setDiscount(e.target.value) } className={styles.Modal__input} type="text" />
            
            <select onChange={(e) => setCategoryId(e.target.value) } className={styles.Modal__select} name="category" id="category">
            {
                category.data?.map((el) =>{
                    return  <option key={el.id} value={el.id}>{el.name}</option>
                })
            }
            </select>

            <select onChange={(e) => setBarndId(e.target.value) } className={styles.Modal__select} name="brand" id="brand">
            {
                brand.data?.map((el) =>{
                    return  <option key={el.id} value={el.id}>{el.name}</option>
                })
            }
            </select>

            <select onChange={(e) => setMeasurementId(e.target.value) } className={styles.Modal__select} name="measurement" id="measurement">
            {
                measurement.data?.map((el) =>{
                    return  <option key={el.id} value={el.id}>{el.nameUz}</option>
                })
            }
            </select>

            <input placeholder='code' onChange={(e) => setCodeList(e.target.value) } className={styles.Modal__input} type="text" />
            <input placeholder='price' onChange={(e) => setPriceList(e.target.value) } className={styles.Modal__input} type="text" />
            <input placeholder='type' onChange={(e) => setPriceType(e.target.value) } className={styles.Modal__input} type="text" />
            <input  onChange={(e) => setPhotos(e.target.files[0]) } className={styles.Modal__file} type="file" />
            <img className={styles.Modal__uploat} src={upload} alt="upload" />
            <button className={styles.Modal__btn} onClick={addProduct}>Add</button>
        </div>
    );
}

export default Modal;
