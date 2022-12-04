// Travel and Learn with Tripoto's Mindful Retreats
import React from "react";
import { useEffect} from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import {GoLocation } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import "../CSS/Homepage.css"
import {useNavigate} from "react-router-dom";


export default function Middle6Part() {
//   const don=()=>{
//     alert('Payment Sucessfull')
//     naviagte("/")
// }
const naviagte= useNavigate();
const donn=()=>{
   
  naviagte("/TripPage")
}
  let  data= [
    {
    "_id": "636bba252c157adf8f584d36",
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1669036880_image_cover_c.jpg",
    "title": "Explore Auroville On A Cycle And Learn The Art Of Kalaripayattu | Beyond Community, Auroville",
    "place": "Auroville",
    "cost": 6700,
    "days": "3 Days 2 Nights",
    "__v": 0
    },
    {
    "_id": "636be982e5cacf7fb853c0c6",
    "title": "Learn Sketching & Go On Guided Forest Walks Around The Himalayan Trails |Cosmic Geeks, Dharamkot",
    "place": "Himachal Pradesh",
    "cost": 8300,
    "days": "4 Days 3 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
    },
    {
    "_id": "636be996e5cacf7fb853c0c8",
    "title": "Learn To Cook A Traditional Rajasthani Meal At A 200 Year-Old Luxury Haveli",
    "place": "Raiasthan",
    "cost": 3799,
    "days": "2 Days 2 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg"
    },
    {
    "_id": "636be9bde5cacf7fb853c0ca",
    "title": "Trek To Triund And Stay At The Residence Of Kangra's Maharaja | Clouds End Villa,Dharamshala",
    "place": "Dharamshala",
    "cost": 13750,
    "days": "2 Days 1 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
    },
    {
    "_id": "636be9cce5cacf7fb853c0cc",
    "title": "Stargaze & Enjoy A Picnic In The Hills As You Stay At A Unique A- Framed Cottage| Urna Boutique Stay",
    "place": "Mukteshwar",
    "cost": 6899,
    "days": "3 Days 4 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
    },
    {
    "_id": "636be9dbe5cacf7fb853c0ce",
    "title": "Explore One Of Asia's Spookiest Spots While Unwinding Amidst Naturel Seegreen Lodges, Mussoorie",
    "place": "Mussoorie",
    "cost": 7500,
    "days": "4 Days 3 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
    },
    {
    "_id": "636be9efe5cacf7fb853c0d0",
    "title": "Explore An Artist's Estate & Stay In A Kathkuni Home Hidden In Manali's Forests INORTH",
    "place": "Manali",
    "cost": 9850,
    "days": "4 Days 5 Nights",
    "__v": 0,
    "img":"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
    },
    
  ]    
  
  //   const [data,setData] =useState([]);


  // useEffect(()=>{
  //       getData()
  //   },[])
    
  //   function getData(){
  //      axios.get("https://avdhoot-fake-api.herokuapp.com/bookhotels").then((res)=>setData(res.data
  //      ))
  //   }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
     
      <div style={{ position: "relative",width:"80%",margin:"auto",marginBottom:'30px' }}>
      <p id="middlepart_p" style={{fontSize:"30px",fontWeight:"700",marginTop:"20px",textAlign:"start",paddingLeft:"4%",marginBottom:"20px"}}>Travel and Learn with Tripoto's Mindful Retreats</p>
        <Carousel responsive={responsive}>  
            
            {data.map((item)=>(
                <div style={{width:"80%",margin:"auto"}} key={item.id}>
                    <img  style={{borderRadius:"5%",height:"100%",width:"100%"}} src={item.img} alt="" />
                    <p style={{color:"green",textAlign:"start"}}>Package</p>
                  <p style={{fontWeight:"700",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.title}</p>
                  <div style={{display:"flex",marginTop:"5px",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}><GoLocation style={{marginRight:"10px",marginTop:"2px",color:"green"}}/> <p style={{color:"teal",fontWeight:"600"}}> {item.place}</p> </div>
                    <div><div style={{color:"white",backgroundColor:"rgb(89, 181, 189)",borderRadius:"10px",padding:"3px 6px"}}>3D .2N</div></div>
                  </div>
                   <div style={{marginBottom:"10px",display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                  <p style={{textAlign:"start",fontSize:"19px",fontWeight:"700"}}>₹ {item.cost} /person</p>
                  <Button onClick={donn}>Book Now</Button>
                  </div>
                  <hr />
   
               
                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
