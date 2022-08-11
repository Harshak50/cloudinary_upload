import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar"
import axios from "axios";
import { Container} from "@mui/system";


const PhotosPage = ()=>{ 
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
{res.map(element => (
    <Container sx={{maxWidth:300, display:"inline"}}>
 <img src ={element.url} alt="img" style={{margin:"2% auto", marginBottom:"10px" ,width:300, height:200,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:4}} />
 </Container>
))}
</>
);
}

export default PhotosPage;