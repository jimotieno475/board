import React from 'react'
import { Link } from 'react-router-dom'
import '../Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
        <h1>  4TH WALL CHECKERS  GAME </h1>
        <button className='button'><Link to="/signup">Signup</Link></button>
        <button className='button'><Link to="/login">Login</Link></button>
    </div>
  )
}