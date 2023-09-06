import React from 'react'
import './Header.css'

import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Header() {

    const categories = ['Health', 'Food', 'Travel', 'Technology']

  return (
    <div className='header-container'>
        <FcHome />
        <div className='categories-container'>
            {categories.map(item => <Link className='nav-link' to={`/category/${item}`}>{item}</Link>)}
        </div>
    </div>
  )
}

export default Header