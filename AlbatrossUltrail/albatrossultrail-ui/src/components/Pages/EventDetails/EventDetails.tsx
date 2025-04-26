import { useEffect, useState } from "react";

const EventDetails = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
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

    return (
        <div className="container my-5">
            {/* Main Title */}
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0 text-center">Event Countdown Timer</h4>
                        </div>
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col-3">
                                    <h3 id="days" className="display-4">{timeRemaining.days}</h3>
                                    <p>Days</p>
                                </div>
                                <div className="col-3">
                                    <h3 id="hours" className="display-4">{timeRemaining.hours}</h3>
                                    <p>Hours</p>
                                </div>
                                <div className="col-3">
                                    <h3 id="minutes" className="display-4">{timeRemaining.minutes}</h3>
                                    <p>Minutes</p>
                                </div>
                                <div className="col-3">
                                    <h3 id="seconds" className="display-4">{timeRemaining.seconds}</h3>
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: '150px' }}>
                <div className="col-12 text-center">
                    <h1 className="display-4 fw-bold text-warning">ELIGIBILITY CRITERIA!</h1>
                    <p className="lead px-lg-5 mx-lg-5">
                        Here, you can find out ELIGIBILITY CRITERIA of our EVENTS that are available.
                    </p>
                </div>
            </div>

            {/* 50K and 83K Cards Row */}
            <div className="row mb-5 g-4">
                {/* 83K Card */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img
                            src="/Albatross_Event_Category_83k.png"
                            className="card-img-top"
                            alt="83K Trail Race"
                        />
                        <div className="card-body">
                            <h3 className="card-title text-primary">83K</h3>
                            <div className="mb-3">
                                {/* <span className="badge bg-info me-2">
                                <img 
                                    src="/A83k.png" 
                                    alt="Website favicon" 
                                    style={{ width: '70px', height: '30px' }}
                                />
                                </span> */}
                                <span className="badge me-2">
                                    <img
                                        src="./ITRA_Point3.png"
                                        alt="Website favicon"
                                        style={{ width: '70px', height: '30px' }}
                                    />
                                </span>
                                <span className="badge bg-info me-2">2395m Elevation</span>
                                <span className="badge">
                                    <img
                                        src="./UTMB_Index.png"
                                        alt="Website favicon"
                                        style={{ width: '100px', height: '25px' }}
                                    />
                                </span>
                            </div>

                            <h5 className="fw-bold">Minimum Requirements:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>3000 KM</strong> total mileage in last 18 months
                                </li>
                            </ul>

                            <h5 className="fw-bold">Performance Criteria (last 18 months):</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Trail Ultra (50K) with 1000m+ elevation <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    3 Ultra Marathons (50K) within 8:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    2 Ultras: 80K/14h, 100K/18h, or 100mi/33h <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    5 Marathons (42.2K) within 5:30 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    2 ITRA Points
                                </li>
                            </ul>

                            <div className="alert alert-light mt-3 mb-0">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                <small>Note: Fulfill any one requirement above. We accept activity data from the last 18 months.</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 50K Card */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img
                            src="/Albatross_Event_Category_50k.png"
                            className="card-img-top"
                            alt="50K Trail Race"
                        />
                        <div className="card-body">
                            <h3 className="card-title text-primary">50K</h3>
                            <div className="mb-3">
                                <span className="badge me-2">
                                    <img
                                        src="./ITRA_POINT2.png"
                                        alt="Website favicon"
                                        style={{ width: '70px', height: '30px' }}
                                    />
                                </span>
                                <span className="badge bg-info me-2">1437m Elevation</span>
                                <span className="badge">
                                    <img
                                        src="./UTMB_Index.png"
                                        alt="Website favicon"
                                        style={{ width: '100px', height: '25px' }}
                                    />
                                </span>
                            </div>

                            <h5 className="fw-bold">Minimum Requirements:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>1800 KM</strong> total mileage in last 12 months
                                </li>
                            </ul>

                            <h5 className="fw-bold">Performance Criteria (last 12 months):</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Trail 25K within 4:30 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    2 Ultra Marathons (50K) within 8:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Ultra Marathon: 80K/14h, 100K/18h, or 100mi/33h <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 ITRA Point <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    3 Marathons (42.2K) within 5:30 hours
                                </li>
                            </ul>

                            <div className="alert alert-light mt-3 mb-0">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                <small>Note: Fulfill any one requirement above. We accept activity data from the last 12 months.</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 33k card  */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img
                            src="/Albatross_Event_Category_33K.png"
                            className="card-img-top"
                            alt="33K Trail Race"
                        />
                        <div className="card-body">
                            <h3 className="card-title text-primary">33K</h3>
                            <div className="mb-3">
                                <span className="badge me-2">
                                    <img
                                        src="./ITRA_Point1.png"
                                        alt="Website favicon"
                                        style={{ width: '70px', height: '30px' }}
                                    />
                                </span>
                                <span className="badge bg-info me-2">958m Elevation</span>
                                <span className="badge">
                                    <img
                                        src="./UTMB_Index.png"
                                        alt="Website favicon"
                                        style={{ width: '100px', height: '25px' }}
                                    />
                                </span>
                            </div>

                            <h5 className="fw-bold">Minimum Requirements:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>600 KM</strong> total mileage in last 6 months
                                </li>
                            </ul>

                            <h5 className="fw-bold">Performance Criteria (last 6 months):</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Marathon (42.2K) within 6:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    Dhaka 25K 2025 finish within 2:30 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Trail Half Marathon within 4:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    4 Half Marathons within 2:50 hours each <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    Chattogram Trail HM 2022 finisher + 2 additional HMs within 2:50h
                                </li>
                            </ul>

                            <div className="alert alert-light mt-3 mb-0">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                <small>Note: Fulfill any one requirement above. We accept activity data from the last 6 months.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 33K Card (centered) */}
            {/* <div className="row mb-5 g-4">
                <div className="col-md-4 mx-auto">
                    <div className="card h-100 border-0 shadow-sm">
                        <img
                            src="/Albatross_Event_Category_33K.png"
                            className="card-img-top"
                            alt="33K Trail Race"
                        />
                        <div className="card-body">
                            <h3 className="card-title text-primary">33K Trail Race</h3>
                            <div className="mb-3">
                                <span className="badge bg-info me-2">33Km</span>
                                <span className="badge bg-info me-2">958m Elevation</span>
                                <span className="badge bg-info me-2">1 ITRA Point</span>
                                <span className="badge bg-info">UTMB Index</span>
                            </div>

                            <h5 className="fw-bold">Minimum Requirements:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>600 KM</strong> total mileage in last 6 months
                                </li>
                            </ul>

                            <h5 className="fw-bold">Performance Criteria (last 6 months):</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Marathon (42.2K) within 6:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    Dhaka 25K 2025 finish within 2:30 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    1 Trail Half Marathon within 4:00 hours <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    4 Half Marathons within 2:50 hours each <strong>OR</strong>
                                </li>
                                <li className="list-group-item bg-transparent ps-0">
                                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                                    Chattogram Trail HM 2022 finisher + 2 additional HMs within 2:50h
                                </li>
                            </ul>

                            <div className="alert alert-light mt-3 mb-0">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                <small>Note: Fulfill any one requirement above. We accept activity data from the last 6 months.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Common Instructions Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-info mb-4">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                Important Notes for All Categories
                            </h3>

                            <div className="alert alert-warning">
                                <strong>Experience-Based Exceptions:</strong> The organizers reserve the right to allow participation
                                even if the above criteria aren't fully met, based on alternative experience and race history.
                            </div>

                            <h5 className="fw-bold mt-4">Submission Requirements:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    Acceptable proof: Chip timing links, ITRA ID/number, or Strava workout links
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    <strong>Preference given</strong> to applicants providing official chip timing results
                                </li>
                            </ul>

                            <h5 className="fw-bold mt-3">Strava Specifics:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">
                                    <i className="bi bi-lock text-info me-2"></i>
                                    Privacy must be set to <strong>public</strong> for verification
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-stopwatch text-info me-2"></i>
                                    Only <strong>Elapsed Time</strong> considered from Strava records
                                </li>
                            </ul>

                            <h5 className="fw-bold mt-3">Elevation & Accounts:</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">
                                    <i className="bi bi-graph-up text-success me-2"></i>
                                    <strong>Trail elevation prioritized</strong> - road elevation not accepted
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-person-check text-success me-2"></i>
                                    Active <strong>ITRA & UTMB accounts</strong> required for all participants
                                </li>
                            </ul>

                            <div className="alert alert-info mt-4">
                                <h6 className="fw-bold">
                                    <i className="bi bi-people-fill me-2"></i>
                                    Selection Process
                                </h6>
                                <ul className="mb-0">
                                    <li>All applications reviewed by our selection panel</li>
                                    <li>Final selection at the panel's discretion based on submitted data</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration CTA */}
            <div className="row mt-4" hidden>
                <div className="col-12 text-center">
                    <button className="btn btn-warning btn-lg px-5 py-3 fw-bold"> 
                        <a href="/registration" className="text-light">
                            <i className="bi bi-pencil-square me-2"></i>
                            Register Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;