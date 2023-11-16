import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='header__input'>
            <input type="text" placeholder='Search...'/>
        </div>
        <div className='header__button'>
            <button>Sort By Price</button>
        </div>
        <div className='header__button'>
            <button>Discounted</button>
        </div>
    </div>
  )
}

export default Header