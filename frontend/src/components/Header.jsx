import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1 className='h1'>
            URL Shortener
        </h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/analysis">Analysis</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
