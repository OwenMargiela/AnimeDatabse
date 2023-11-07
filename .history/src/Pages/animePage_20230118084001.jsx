import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState()
  
  async function fetchAnime(){
    const {data} = await axios.get(`https://api.jikan.moe/v4/anime/${id}`) 
    console.log(data)
  }

  useEffect(()=>{

  },[])

  return <div>{id}</div>;
}

export default AnimePage;
