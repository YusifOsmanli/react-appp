import React from 'react'

function Item({item}) {
  return (
    <div className='td'>
        <div>{item.name}</div>
    <div>{item.unitPrice}AZN</div>
    </div>
  )
}

export default Item