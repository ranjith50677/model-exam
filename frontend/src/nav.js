import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";


export default function Nav(){
  let ctx = useContext(userContext);
const [userName,setUserName]=useState("")
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

 
  


  return(<>
  <nav class="navbar ">
  {/* <img alt="banklogo" class="banklogo" src={bl} /> */}
    <ul class="nav">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#/Movie">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#/createAccount">CreateAccount</a>
     </li> 
     <li class="nav-item">
      <a class="nav-link" href="#/login">Login</a>
     </li> 
     <li class="nav-item">
       <a class="nav-link"
        href="#/Moviebooking">movie booking</a>
     </li>
     <li class="nav-item">
       <a class="nav-link"
        href="#/allData">All Data</a>
     </li>
     <li>
     {data.map((data,i)=>
    <div  key={i}>
      <div class="display">
    </div>
    <p class="profile" onChange={(e)=>{setUserName((e.target.values))}} >{data.firstname}</p> 
    </div>
      
		 )}
     </li>
     
	  
    </ul>
  </nav>
  </>
  )}