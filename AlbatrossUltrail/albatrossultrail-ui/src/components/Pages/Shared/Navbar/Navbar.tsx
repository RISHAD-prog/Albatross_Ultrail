import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  // const [isLoggedIn,] = useState(false);

  const navigate = useNavigate();
  const [logoPosition, setLogoPosition] = useState('translateY(-25%)');
  const [leftPosition, setLeftPosition] = useState('20%');


  const handleNavigation = (path: string) => {
    // Close by unchecking the checkbox
    const checkbox = document.getElementById('offcanvas-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    navigate(path);
  };

  useEffect(() => {
    const eventDate = new Date('2025-10-25T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && window.innerWidth < 1400) {
        setLeftPosition('5%');
        setLogoPosition('translateY(0%)'); 
      }
      else if (window.innerWidth <= 1000) {
        setLeftPosition('5%');
        setLogoPosition('translateY(0%)'); 
      }
      else if (window.innerWidth >= 1000 && window.innerWidth < 1400) {
        setLeftPosition('10%');
        setLogoPosition('translateY(-25%)');
      }
      else if (window.scrollY > 50 && window.innerWidth > 1400) { 
        setLogoPosition('translateY(0%)');
      }
      else {
        setLeftPosition('20%');
        setLogoPosition('translateY(-25%)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>

      {/* Top Date Bar (Desktop only) */}
      <div className="d-none d-md-block text-center py-1 bg-dark text-white small">
        UPCOMING EVENT ON 24 - 25 OCTOBER 2025 <span className="px-2"> | </span> Location: Bandarban, Bangladesh
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-0">
        <div className="container-fluid px-3 px-md-5">
          {/* Logo - Centered on mobile, left on desktop */}
          <Link
            className="navbar-brand mx-auto mx-lg-0 me-lg-4"
            style={{ paddingLeft: leftPosition, transform: logoPosition, transition: 'transform 0.3s ease' }}
            to="/"
          >
            <img
              src="/Albatross_Ultrail_Logo.png"
              alt="Albatross Ultrail Logo"
              style={{ height: '90px', objectFit: 'contain' }}
            />
          </Link>

          {/* Mobile menu button - shows only on mobile */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop menu items (hidden on mobile) */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <div className="d-flex flex-grow-1 justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about_us">About Us</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">LEGENDS</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false" >
                    Distances
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/criteria83K" >83K</Link></li>
                    <li><Link className="dropdown-item" to="/criteria50K">50K</Link></li>
                    <li><Link className="dropdown-item" to="/criteria33K">33K</Link></li>
                  </ul>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                    RACES & RUNNERS
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="#">RACES</Link></li>
                    <li><Link className="dropdown-item" to="#">RUNNERS</Link></li>
                  </ul>
                </li> */}
              </ul>

              {/* Avatar Dropdown */}
              {/* {isLoggedIn ? (
                <div className="dropdown ms-3">
                  <button
                    className="btn btn-ghost p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-label="User menu"
                  >
                    <div className="avatar">
                      <div className="w-9 rounded-full border-2 border-white/30">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="User profile"
                        />
                      </div>
                    </div>
                  </button>

                  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li className="menu-divider"></li>
                    <li><button className="text-error">Logout</button></li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="btn text-white hover:bg-white/10 mx-3">
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-start d-lg-none" tabIndex={-1} id="mobileNavbar"
        aria-labelledby="mobileNavbarLabel">
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title text-white" id="mobileNavbarLabel">Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => handleNavigation('/')} data-bs-dismiss="offcanvas">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about_us" onClick={() => handleNavigation('/about_us')} data-bs-dismiss="offcanvas">About Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#" data-bs-dismiss="offcanvas">LEGENDS</Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false" >
                Distances
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/criteria83K" onClick={() => handleNavigation('/criteria83K')} data-bs-dismiss="offcanvas">83K</Link></li>
                <li><Link className="dropdown-item" to="/criteria50K" data-bs-dismiss="offcanvas">50K</Link></li>
                <li><Link className="dropdown-item" to="/criteria33K" data-bs-dismiss="offcanvas">33K</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                RACES & RUNNERS
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">RACES</Link></li>
                <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">RUNNERS</Link></li>
              </ul>
            </li> */}
          </ul>

          {/* Mobile Countdown Timer */}
          <div className="mt-4 text-center">
            <div className="text-white small">
              <span className="fw-bold d-block mb-2">STARTS IN</span>
              <div>
                <span className="fw-bold">{timeRemaining.days}D</span>{' '}
                <span className="fw-bold">{timeRemaining.hours}H</span>{' '}
                <span className="fw-bold">{timeRemaining.minutes}M</span>{' '}
                <span className="fw-bold">{timeRemaining.seconds}S</span>
              </div>
            </div>
          </div>

          {/* Mobile Avatar Dropdown */}
          {/* {isLoggedIn ? <div className="dropdown mt-4 text-center">
            <button className="btn btn-link p-0 border-0" type="button"
              data-bs-toggle="dropdown">
              <div className="rounded-circle overflow-hidden mx-auto"
                style={{ width: '48px', height: '48px', border: '2px solid rgba(255,255,255,0.3)' }}>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="w-100 h-100 object-fit-cover"
                  alt="User avatar"
                />
              </div>
            </button>
            <ul className="dropdown-menu text-center">
              <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">PROFILE</Link></li>
              <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">SETTINGS</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger">LOGOUT</button></li>
            </ul>
          </div> : <Link to="/login" onClick={() => handleNavigation('/login')} data-bs-dismiss="offcanvas" data-bs-target="#mobileNavbar" aria-label="Close" className="btn text-white hover:bg-white/10 mx-3 mt-4">
            Login </Link>
          } */}
        </div>
      </div>
    </>
  );
};

export default Navbar;