import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import { encode } from "base-64";
import axios from "axios";


const PhotosPage = ()=>{


const [images,setImages] =useState([])   
const [res,setRes]=useState([]);
const fetchImages =async ()=>{
    try{
    console.log("fetching")
    var response = await axios.get(`https://fathomless-fjord-33378.herokuapp.com/getAllImages`)        
    const data  = response.data.resources
    setRes(data);
    console.log(data)
    }
    catch(e){
console.log(e)
    }
}
useEffect(()=>{
    fetchImages();
},[]
);

return(
<>

<Navbar></Navbar>
<h1>photos</h1>
{res.map(element => (
    <img src ={element.url} alt='alternative image' style={{height:"300px",margin:"20px"}} />
))}
</>
);
}

export default PhotosPage;