import React from 'react'
import "./index.scss"
function index() {
  return (
    <nav>
        <div className='start_bootstrap'><p><a href='!#'>Start Bootstrap</a></p></div>
        <div className='nav_item'>
            <ul>
                <li><a href='!#'>Home</a></li>
                <li><a href='!#'>About</a></li>
                <li><a href='!#'>Contact</a></li>
                <li><a href='!#'>Pricing</a></li>
                <li><a href='!#'>FAQ</a></li>
                <li><a href='!#'>Blog<i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href='!#'>Portfolio<i class="fa-solid fa-caret-down"></i></a></li>
                
            </ul>
        </div>
    </nav>
  )
}

export default index