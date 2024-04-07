import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary ">
        <div className="container">
            <a className="navbar-brand fs-4 text-white" href="#">IndigitalSecure</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
                <a className="nav-link text-white fs-6" href="#">Home</a>
                <a className="nav-link text-white" href="#">Features</a>
                <a className="nav-link text-white" href="#">Pricing</a>
                <a className="nav-link text-white" >Disabled</a>
            </div>
            <button className='bg-white btn'>Log In/sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar