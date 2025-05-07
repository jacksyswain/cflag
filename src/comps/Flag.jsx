import React from 'react'
import { useState, useEffect } from 'react'
import './Flag.css'

function Flag() {
 const [flagData,setFlagData]= useState([]);
 useEffect(()=>{
    async function fetchData(){
        try{
            const res= await fetch(`https://xcountries-backend.azurewebsites.net/all `)
            const data= await res.json();
            console.log(data)
            setFlagData(data);
        }catch(err){
            console.error("we are facing error at",err)
        }
    }
    fetchData();
 },[])
  return (
    <div>
      <div className='grid'>{flagData.map((flag,index)=>
        <div className='card' key={index}>
        <img style={{width:'200px'}} src={flag.flag} alt="flag" />
        <h2>{flag.name}</h2>
        </div>
      )}</div>
    </div>
  )
}

export default Flag
