import React from 'react'
import { Link } from 'react-router-dom'

export default function Sining() {
  return (
    <div className='container'>
        <Link to="/signup" className="link">Signup</Link>
        <Link to="/login" className="link">Login</Link>
    </div>
  )
}
