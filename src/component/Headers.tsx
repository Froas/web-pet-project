import React from 'react'
import {Link} from "react-router-dom"

export const Headers = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/card">Card</Link>
      <Link to="/todo">ToDo</Link>
    </nav>
  )
}
