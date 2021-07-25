import React, {  useState} from 'react';
import './App.css';
import axios from 'axios'

function App () {
  const [advice,setAdvice] = useState('')
 
   function handlesubmit(){
    axios.get("https://api.adviceslip.com/advice")
    .then(response=>{
        const data= response.data.slip.advice
        setAdvice(data)
      })
      .catch( err=>{
        console.log(err)
      });
   }
    return (
      <div className="app">  
              <h1 className="h1">Give Me An Advice!</h1>
             <h2 className="heading">{advice}</h2>
             <button className="button" onClick={handlesubmit}>Click me</button>
      </div>

    );
  
}

export default App;
