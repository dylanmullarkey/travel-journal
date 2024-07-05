import React from 'react'
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"


export default function App(){
  console.log(data)
  const cards = data.map(card => {
    return <Card 
            key={card.id}
            {...card}
            />
  })

  return(
    <div className='app--container'>
      <Nav />
      <main className='cards--container'>
        {cards}
      </main>
    </div>
  )
}
