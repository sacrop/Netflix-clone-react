import React, { useEffect, useState } from 'react'
import './RawPost.css'
import { imageUrl } from '../constants/Constants'
import axios from 'axios'
const RawPost = (props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  return (
    <div className='raw'>
        <h2>{props.titles}</h2>
        <div className='posters'>
          {
            movies.map((mov)=>{
              return <img className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+mov.backdrop_path}`} alt=''/>
            }
            )
          }
            <img className='poster'  src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' alt='poster'/>  
         </div>
    </div>
  )
}

export default RawPost