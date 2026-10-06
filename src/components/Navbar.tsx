import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

const moreLinks = [
  { to: '/equity', label: 'Equity' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/whitepaper', label: 'Whitepaper' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src='/universium-animated-96x96.gif' alt='' className='navbar-logo-img' />
          Universium
        </NavLink>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'is-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar-more">
            <button className="navbar-link navbar-more-button">More<span>⌄</span></button>

            <div className="navbar-dropdown">
              {moreLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `navbar-dropdown-link ${isActive ? 'is-active' : ''}` }
                >{link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="navbar-right">
          <a
            href="https://discord.gg/universium"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-discord"
            aria-label="Join Discord"
          ><img src="/discord.svg" alt="Discord" />
          </a>

          <button
            className="navbar-toggle"
            aria-label="toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
