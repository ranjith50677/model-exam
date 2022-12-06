import "./App.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";

export default function Profile() {
let ctx = useContext(userContext);
const [data,setData]=useState([]);
 
let token=localStorage.getItem('x-auth');

 const config = {
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'x-auth':token
         
    }
  };
 async function Myprofile() {
    
    const url = "http://localhost:4000/api/bank/profile";
    axios
      .get(url,config
      )
      
      .then((res) => {
       
        console.log(res.data)
		setData(res.data)
       
      })
      .catch((error) => {
        console.log(error.response.data);
          
        })
      
  }
  useEffect(()=>{
	Myprofile();
  },[])
  

  return (
    <>
	
      
    </>
  );
}
