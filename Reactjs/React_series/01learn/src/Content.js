import React from 'react'

const Content = () => {

  const handleNameChange=()=>
    {
      const name=['Ankush','Sahil','Lavish'];
      const x=Math.floor(Math.random()*3);
      return name[x];
    }
  return (
    <main>
      Hello {handleNameChange()} !
    </main>
  )
}

export default Content