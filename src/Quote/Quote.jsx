import React, {useState} from 'react'
import './Quote.css'
import axios from 'axios'

function Quote() {
    //create state to hold quote
    const [quote, setQuote] = useState('')

    //retrieve quote from api when the button is clicked
    const getQuote = () =>{
        console.log('get quote')
        //make api call to get random quote
        //https://api.quotable.io/random

        axios.get(`https://api.quotable.io/random`)
        .then(res =>{
            console.log(res.data) //this is my quote data
            //what do I do with it?  store it in state
            setQuote(res.data)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="homepage-container">
        <p>{quote?.tags && quote?.tags[0]}</p>
        <h2>{quote?.content}</h2>
        <h3>{quote?.author}</h3>
        <button onClick={getQuote}>Get Quote</button>

    </div>
  )
}

export default Quote