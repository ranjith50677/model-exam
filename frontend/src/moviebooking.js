import "./App.css";
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Card,CardGroup } from "react-bootstrap";
import movie from "./movie.jpg";
import Ak from "./rd.jpg";
import Ys from "./dg.jpg";


export default function MovieBooking() {
  
   const [counter,setCounter]=useState(0);
   const [count,setCount]=useState(0);
   const [counte,setCounte]=useState(0);
      const [show, setShow] = React.useState(true);
      const[bal,setbal]=useState(0);
      const [values,setValues]=useState(0);
    
       const token=localStorage.getItem('x-auth');
// console.log(token)

      async function handle(){
        let headers={
          'Content-type':'application/json',
          'Accept':'application/json',
          'x-auth':token
        }
        const url="http://localhost:4000/api/bank/MovieBooking"
        await axios.put(url,{
          MovieBooking:values,
        },{headers})
        .then(res=>{
          if(res.status===400){
            alert("Something Went Wrong");
          }
          else{
            setShow(false);
            console.log(values)
            setbal(res.data.balance)
            alert("Successfully $" + values);

    
          }
        })
        .catch(error=>{
          alert(error.response.data)
        })
        
      }
      function Balance(){
        alert(`Your Avaliable Balance ${bal}`)
     }
    function clearForm() {
       setValues("");
       setCounter("");
       setShow(true);
      
    }


    return (
               <>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````/  
              
          {show ? (
            <>
            <CardGroup>
            <Card style={{ width:"5rem" }}>
            <img src={movie} style={{ width:400 }} />
            <Card.Text>
                A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain. 
              </Card.Text>
            <Card.Body>
              <button onClick={() => setCount(count + 200)}>ticket$200 + </button>
              <button onClick={() => setCount(count - 200)}>ticket$200 - </button>
              <p>booking total Amount={count}</p>
            </Card.Body>
          </Card>
          <Card  style={{ width:"10rem" }}>
            <img src={Ak} style={{ width:400 , height:300 }} />
            <Card.Text>
            a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.
              </Card.Text>
            <Card.Body>
              <button onClick={() => setCounte(counte + 200)}>ticket$200 + </button>
              <button onClick={() => setCount(counte - 200)}>ticket$200 - </button>
              <p>booking total Amount={counte}</p>
            </Card.Body>
          </Card>
          <Card  style={{ width:"10rem" }}>
          <img src={Ys} style={{ width:400 },{ height:300 }} />
          <Card.Text>
            a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.
           </Card.Text>
          <Card.Body>
          <button onClick={() => setCounter(counter + 200)}>ticket$200 + </button>
          <button onClick={() => setCounter(counter - 200)}>ticket$200 - </button>
          <p>booking total Amount={counter}</p>
          </Card.Body>
          </Card>
       </CardGroup>
              <h1 class="success">movie cost</h1> <br />
              <br/>
              <h1>{counter + count + counte}</h1>
             
              <input class="lable"
                type="text"
                
                placeholder="Enter the Amount to"
                onChange={(e) =>
                  setValues((e.target.value))}
              />
              <br />
              <button
                type="submit"
                class="btnsubmit bg-primary"
                onClick={handle}
              >
                total cost
              </button>
              <br />
            </>
          ) : (
            <>
              <h5 class="success">Successful Transaction!</h5>

              <br />
              <button
                type="submit" id="another_btn"
                onClick={clearForm} >
                 another movie
              </button>
              <button id="another_btn" onClick={Balance}>Check Balance</button>
            </>
          )}
        </>
    );
  }