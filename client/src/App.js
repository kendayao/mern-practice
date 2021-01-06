import React, {useState, useEffect} from "react";
import "./App.css";
import API from './utils/API'


function App() {
  const[faq, setFaq]=useState([]);

  useEffect(()=>{
    API.getFaqs().then(res=>{
      console.log(res)
      setFaq(res.data)
    }).catch(err=>console.log(err))

  },[])

  console.log(faq)
  return (
    <div className="app">
      <h1>Mern Practice</h1>
      {faq.map(item=>(
        <p>{item.question}</p>
        ))}
    </div>
  );
}


export default App;
