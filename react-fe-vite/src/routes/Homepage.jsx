import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        Welcome home <br />
        <Link className='btn btn-primary' to="/choose">Choose mood</Link>
    </div>
  )
}

export default Homepage