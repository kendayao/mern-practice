import React, {useState, useEffect} from "react";
import "./App.css";
import API from './utils/API'


function App() {
  const[faq, setFaq]=useState([]);
  const[id, setId]=useState('');
  const[question, setQuestion]=useState('')
  const[answer, setAnswer]=useState('')

  useEffect(()=>{
    API.getFaqs().then(res=>{
   
      setFaq(res.data)
    }).catch(err=>console.log(err))

  },[faq])

  const handleSubmit=(event)=>{
    event.preventDefault()
    API.postFaqs({
      faqId: id,
      question: question,
      answer: answer,
    }).then(()=>{
      console.log('test')
      setId('')
      setQuestion('')
      setAnswer('')
    })
  }

  const handleDelete=(_id)=>{
    console.log(_id)
    API.deleteFaq(_id).then(()=>console.log('deleted'))
  }

  const handleUpdate=((_id)=>{
    API.updateFaq(_id, {
      question: 'testQuestion',
      answer: 'testAnswer'
    }).then(()=>(
      console.log('test update')
    )
    )
  })


  return (
    <div className="app">
      <h1>Mern Practice</h1>
      {faq.map(item=>{
        return(
          <div>
            <p>{item.question}</p>
            <button onClick={()=>handleDelete(item._id)}>Delete</button>
            <button onClick={()=>handleUpdate(item._id)}>Update</button>
          </div>
        )
        })}

        <form>
          <input type='number' placeholder='faq id' value={id} onChange={(event)=>setId(event.target.value)} />  
          <input type='text' placeholder='questions' value={question} onChange={(event)=>setQuestion(event.target.value)}  />
          <input type='text' placeholder='answer' value={answer} onChange={(event)=>setAnswer(event.target.value)} />
          <button onClick={handleSubmit}>Send</button>
        </form>
    </div>
  );
}


export default App;
