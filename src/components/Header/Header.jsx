import React from 'react'
import './Header.css'

import {FcHome} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const categories = ['Health', 'Food', 'Travel', 'Technology']

    const navigate = useNavigate()

  return (
    <div className='header-container'>
        <FcHome onClick={()=>navigate('/')} className='home-icon'/>
        <div className='categories-container'>
            {categories.map(item => <Link className='nav-link' to={`/category/${item}`}>{item}</Link>)}
        </div>
    </div>
  )
}

export default Header