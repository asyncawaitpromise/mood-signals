import React from 'react'
import { Link } from 'react-router-dom';

const link =
    <Link
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: "1rem",
            boxSizing: "border-box"
        }}
        className='btn btn-primary' to="/">Go Home</Link>;

const MoodPicker = () => {
  return (
    <div className='
        MoodPicker max-w-screen-sm m-auto bg-[#333]
        min-h-dvh
        '>
        {link}
        Pick a mood <br />
    </div>
  )
}

export default MoodPicker;