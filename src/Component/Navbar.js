import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> {props.NavText}</a>
        </li>
        
      </ul>
            <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
        <input className="form-check-input" onClick={props.toggleMOde} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode {props.changeMode}</label>
      </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}
