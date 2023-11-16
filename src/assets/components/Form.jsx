import React from 'react'

function Form() {
  return (
    <div>
        <h1><b>Add Form</b></h1>
        <div>
            <input type="text" placeholder='add name'/>
            <input type="number" placeholder='add price'/>
        </div>
        <div>
            <input type="checkbox" />Discounted
        </div>
        <div>
            <button>Add</button>
        </div>
    </div>
  )
}

export default Form