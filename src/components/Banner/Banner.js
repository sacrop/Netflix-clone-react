import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import { API_KEY ,imageUrl} from '../constants/Constants'
const Banner = () => {
  const [movie, setMovie] = useState()
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results)
    }).catch((err)=>console.log(err))
  },[])

  const selectRandomMovie=()=>{
    const randomIndex=Math.floor(Math.random()*movies.length)
    return movies[randomIndex];
  }
  useEffect(()=>{
    const intervalValid=setInterval(()=>{
      setMovie(selectRandomMovie())
    },4000)
    return ()=>clearInterval(intervalValid)
    },[movies])

    const limitDescription = (description, wordLimit) => {
      const words = description.split(' ')
      if (words.length <= wordLimit) {
         return description
      } else {
         return `${words.slice(0, wordLimit).join(' ')}...`
      }
     }
     

  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:"..."}</h1>
            <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? limitDescription(movie.overview, 50) : "loading..."}</h1>
        </div>
        <div className='fade_bottom'>

        </div>
    </div>
  )
}

export default Banner