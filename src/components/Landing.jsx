import React from 'react'
import { Link } from 'react-router-dom'
import '../Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
        <h1>  4TH WALL CHECKERS  GAME </h1>
        <button className='button'><Link to="/home">Play</Link></button>
    </div>
  )
}