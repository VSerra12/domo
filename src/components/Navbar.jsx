import logo from '../assets/Bussiness.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid horizon-padding">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="52" height="52"></img>
          </a>
          <div className="vl"></div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart <span className='cart-quantity'>[</span>0<span className='cart-quantity'>]</span></a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="consultation btn" type="submit">Free Consultation </button>
          </form>
        </div>
      </nav>
    </>

)
}

export default Navbar