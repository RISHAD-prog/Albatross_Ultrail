const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning mb-3">Albatross Ultrail</h5>
                        <p>
                        The Albatross, one of nature's most extraordinary birds, is a symbol of endurance, resilience, and boundless exploration.
                        </p>
                        <div className="mt-3">
                            <a href="https://www.facebook.com/share/167Bv3xf1T/" className="text-white me-2">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://www.instagram.com/albatrossultrail?igsh=MTd3ODJ4ZnFvN3I1NQ==" className="text-white me-2">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                            {/* <a href="#" className="text-white me-2">
                                <i className="bi bi-twitter-x fs-4"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="bi bi-youtube fs-4"></i>
                            </a> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-4">
                        <h5 className="text-warning mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="/about_us" className="text-white text-decoration-none">About Us</a></li>
                            {/* <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Gallery</a></li> */}
                            <li><a href="https://www.facebook.com/share/167Bv3xf1T/" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h5 className="text-warning mb-3">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                                Banasree, Dhaka, Bangladesh
                            </li>
                            {/* <li className="mb-2">
                                <i className="bi bi-telephone-fill me-2 text-warning"></i>
                                +880 
                            </li> */}
                            {/* <li className="mb-2">
                                <i className="bi bi-envelope-fill me-2 text-warning"></i>
                                info@trailcatadventures.com
                            </li> */}
                            <li>
                                <i className="bi bi-clock-fill me-2 text-warning"></i>
                                Mon-Fri: 9AM - 6PM
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3 mb-4">
                        <h5 className="text-warning mb-3">Newsletter</h5>
                        <p>Subscribe to get updates on new adventures and special offers!</p>
                        <div className="input-group mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Your Email" 
                                aria-label="Your Email" 
                            />
                            <button className="btn btn-warning" type="button">
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row pt-3 border-top border-secondary">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="small mb-0">
                            &copy; {new Date().getFullYear()} Albatross Ultrail. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="small mb-0">
                            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;