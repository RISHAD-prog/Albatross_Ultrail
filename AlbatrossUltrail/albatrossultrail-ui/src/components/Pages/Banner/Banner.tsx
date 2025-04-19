
const Banner = () => {
  return (
<div className="position-relative w-100">
      {/* Background Image */}
      <img src="/Albatross_cover.png" className="img-fluid w-100 h-100 object-fit-cover" alt="Cover" />
      
      {/* Overlay */}
      {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div> */}
      
      {/* Buttons */}
      {/* <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-3">
        <button
          className="btn btn-primary px-4 py-2 fw-bold shadow-lg hover:bg-blue-600 transition"
          onClick={() => window.location.href = "/link1"}
        >
          Link 1
        </button>
        <button
          className="btn btn-success px-4 py-2 fw-bold shadow-lg hover:bg-green-600 transition"
          onClick={() => window.location.href = "/link2"}
        >
          Link 2
        </button>
      </div> */}
    </div>
  );
};

export default Banner;