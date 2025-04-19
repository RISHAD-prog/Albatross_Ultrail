// AboutPage.jsx
import { FaFeatherAlt, FaMountain, FaGlobeAmericas, FaRunning } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-primary mb-4">
              Why <span className="text-warning">Albatross ULTRAIL</span>?
            </h1>
            <p className="lead">
              The spirit of endurance meets the freedom of trail running in Bangladesh's hill districts
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="/Albatross_cover.png" 
              alt="Albatross soaring over mountains" 
              className="img-fluid rounded-3 shadow"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm mb-5">
              <div className="card-body p-4 p-md-5">
                <p className="fs-5">
                  The Albatross, one of nature's most extraordinary birds, is a symbol of endurance, 
                  resilience, and boundless exploration. Known for its unmatched ability to travel 
                  thousands of miles across vast oceans, it mirrors the unwavering spirit of ultra-trail 
                  runners who tackle grueling distances over rugged terrains.
                </p>

                <div className="row g-4 my-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <FaFeatherAlt className="text-warning fs-3 mt-1 me-3" />
                      <div>
                        <h4 className="h5">Endurance</h4>
                        <p>
                          Like the albatross, trail runners exhibit unparalleled stamina, pushing their 
                          limits to go further and conquer challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <FaGlobeAmericas className="text-warning fs-3 mt-1 me-3" />
                      <div>
                        <h4 className="h5">Freedom</h4>
                        <p>
                          The albatross soars freely across open skies, inspiring runners to embrace 
                          the freedom of nature and explore uncharted paths.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <FaMountain className="text-warning fs-3 mt-1 me-3" />
                      <div>
                        <h4 className="h5">Adventure</h4>
                        <p>
                          Its journey is filled with unpredictability and awe—just like the trails, 
                          where every step leads to a new discovery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <FaRunning className="text-warning fs-3 mt-1 me-3" />
                      <div>
                        <h4 className="h5">Nature Connection</h4>
                        <p>
                          These majestic birds thrive in harmony with the natural world, reflecting 
                          trail running's essence—being one with nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-3 mt-4">
                  <h3 className="h4">About the Name</h3>
                  <p>
                    "ULTRAIL" combines <strong>"Ultra"</strong> for the ultra-distance challenge and 
                    <strong>"Trail"</strong> for the scenic, untamed paths runners will explore. Together, 
                    Albatross ULTRAIL represents the ultimate test of human spirit, courage, and 
                    connection to nature.
                  </p>
                  <p className="mb-0">
                    Set in the breathtaking hill districts of Bangladesh, with distances of 30km, 
                    50km, and 50 miles, this event invites you to embark on a journey of resilience 
                    and discovery.
                  </p>
                </div>

                <div className="text-center mt-5">
                  <button className="btn btn-warning btn-lg px-5">
                    Join the Adventure
                  </button>
                  <div className="mt-3">
                    <span className="text-muted">#AlbatrossULTRAIL</span>
                    <span className="text-muted mx-2">•</span>
                    <span className="text-muted">#UltraTrailRunning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;