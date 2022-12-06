import "./App.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";

export default function Alldata() {
let ctx = useContext(userContext);
const [data,setData]=useState([]);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
         
    }
  };
 async function Getall() {
    
    const url = "http://localhost:4000/api/bank/viewall";
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
	Getall();
  },[])
  

  return (
    < ><th className="alldata">
      <td>

        
      {/* Data
      {JSON.stringify(ctx.users)} */}
      <table >
		 <tbody>
      <tr >
		<th>FirstName</th>
    <th>LastName</th>
			<th>Email</th>
			<th>booking amount</th>
		   </tr>
		
		 {data.map((data,i)=>
		   <tr key={i}>
			 
			 <td>{data.firstname}</td>
       <td>{data.lastname}</td>
			 <td>{data.email}</td>
			 <td>{data.balance}</td>
		   </tr>
		 )}
	  </tbody>
	  </table>
      </td>
      </th>
      
    </>
  );
}
