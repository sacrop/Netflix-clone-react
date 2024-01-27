import React, { useEffect, useState } from 'react'
import './RawPost.css'
import YouTube from 'react-youtube'
import { API_KEY, baseUrl, imageUrl } from '../constants/Constants'
import axios from 'axios'
const RawPost = (props) => {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>
    {
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("vedio currently not available")
      }
    }
    )
    .catch((error)=>console.log("error occured"+error))
  } 
  

  return (
    <div className='raw'>
        <h2>{props.titles}</h2>
        <div className='posters'>
          {
            movies.map((mov)=>{
              return (
                
                <img key={mov.id} onClick={()=>{handleMovie(mov.id)}} className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+mov.backdrop_path}`} alt=''/>
               
              )
            }
            )
          }
         </div>
         {urlId && <YouTube videoId={urlId?urlId.key:""}  opts={opts} />}
    </div>
  )
}

export default RawPost