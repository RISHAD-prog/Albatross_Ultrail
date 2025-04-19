import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });
  const [isLoggedIn, setLoginUser] = useState(false);

  useEffect(() => {
    const eventDate = new Date('2025-10-25T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Date Bar (Desktop only) */}
      <div className="d-none d-md-block text-center py-1 bg-dark text-white small">
        UPCOMING EVENT ON 24 - 25 OCTOBER 2025 <span className="px-2"> | </span> Location: Bandarban, Bangladesh
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid px-3 px-md-5">
          {/* Logo - Centered on mobile, left on desktop */}
          <a className="navbar-brand mx-auto mx-lg-0 me-lg-4" style={{ paddingLeft: '20%' }} href="#">
            <img
              src="/Albatross_Ultrail_Logo.png"
              alt="Albatross Ultrail Logo"
              height="50"
            />
          </a>

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
                  <a className="nav-link" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">LEGENDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">EVENTS</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    RACES & RUNNERS
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">RACES</a></li>
                    <li><a className="dropdown-item" href="#">RUNNERS</a></li>
                  </ul>
                </li>
              </ul>

              {/* Countdown Timer */}
              <div className="d-flex align-items-center ms-lg-4">
                <div className="text-white small">
                  <span className="fw-bold">EVENT COUNTDOWN</span>{' '}
                  <span className="fw-bold">{timeRemaining.days}D</span>{' '}
                  <span className="fw-bold">{timeRemaining.hours}H</span>{' '}
                  <span className="fw-bold">{timeRemaining.minutes}M</span>
                </div>
              </div>

              {/* Avatar Dropdown */}
              {isLoggedIn ? (
                <div className="dropdown ms-3">
                  {/* User Avatar Button */}
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

                  {/* Dropdown Menu */}
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
              )}
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
              <a className="nav-link" href="/" data-bs-dismiss="offcanvas">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-dismiss="offcanvas">LEGENDS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-dismiss="offcanvas">EVENTS</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                RACES & RUNNERS
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" data-bs-dismiss="offcanvas">RACES</a></li>
                <li><a className="dropdown-item" href="#" data-bs-dismiss="offcanvas">RUNNERS</a></li>
              </ul>
            </li>
          </ul>

          {/* Mobile Countdown Timer */}
          <div className="mt-4 text-center">
            <div className="text-white small">
              <span className="fw-bold d-block mb-2">EVENT COUNTDOWN</span>
              <div>
                <span className="fw-bold">{timeRemaining.days}D</span>{' '}
                <span className="fw-bold">{timeRemaining.hours}H</span>{' '}
                <span className="fw-bold">{timeRemaining.minutes}M</span>
              </div>
            </div>
          </div>

          {/* Mobile Avatar Dropdown */}
          {isLoggedIn ? <div className="dropdown mt-4 text-center">
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
              <li><a className="dropdown-item" href="#" data-bs-dismiss="offcanvas">PROFILE</a></li>
              <li><a className="dropdown-item" href="#" data-bs-dismiss="offcanvas">SETTINGS</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger">LOGOUT</button></li>
            </ul>
          </div> : <Link to="/login" className="btn text-white hover:bg-white/10 mx-3 mt-4">
            Login </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;