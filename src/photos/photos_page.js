import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import { encode } from "base-64";
import axios from "axios";


const PhotosPage = ()=>{
const [images,setImages] =useState([])   
const [res,setRes]=useState(null);

useEffect(()=>{
    const fetchImages =async ()=>{
        const API_KEY = "337129251757649";
        const API_SECRET= "-2P475GeDhNVK0TajjdXVOgUD_g";

        try{
        console.log("fetching")
        var response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/drbdcglkp/resources/image`,{
            headers: {
                'Access-Control-Allow-Origin':"*",
                'Authorization': 'Basic ' + encode(API_KEY+":"+API_SECRET),
              },
            }).then((res)=>res.json());
        console.log("fetched");
        console.log("response"+response)
        setRes(response);
        }
        catch(e){
    console.log(e)
        }
    }
 fetchImages();
},[]
);

return(
<>
<Navbar></Navbar>
<h1>{res}</h1>

</>
);
}

export default PhotosPage;