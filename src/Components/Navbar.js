import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand " to="/">{props.title}</Link> */}
        <a className="navbar-brand fst-italic" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link " aria-current="page" to="/">Home</Link> */}
              <a className="nav-link  " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link " to="/about">{props.aboutText}</Link> */}
              {/* <a className="nav-link " href="/about">{props.aboutText}</a> */}
            </li>
          </ul>
          {/* <div className={`btn-group my-2 mx-2 text-${props.mode==='dark'?'light':'dark'}`} role="group" aria-label="Basic mixed styles example">
                <p className='slcthemetext my-2 mx-2'>Select Theme</p>
            <button type="button" onClick={props.colorMode} className="btn btn-success">Green</button>
            <button type="button" onClick={props.colorMode} className="btn btn-primary">Blue</button>
            <button type="button" onClick={props.colorMode} className="btn btn-danger">Red</button>
          </div> */}
          <div className={`form-check form-switch mt-2 text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox"onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-stars-fill mb-2" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg></label>
          </div>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
        </div>
      </div>
    </nav>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About us"

}