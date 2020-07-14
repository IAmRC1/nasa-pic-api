import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="#efefef">
        <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <Link className="link" to="/">Take Me Home</Link>
    </div>
  )
}