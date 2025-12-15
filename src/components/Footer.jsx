export default function footer() {
  return (
    <>
      <footer className=" text-center text-white  ">
        <div className="container py-4">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">LOCATION</h5>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">AROUND THE WEB</h5>

              <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">
                <li>
                  <a href="#!" className="text-white  ">
                    <i className="fa-brands fa-facebook rounded-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i className="fa-brands fa-x-twitter rounded-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i className="fa-brands fa-linkedin rounded-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i className="fa-brands fa-dribbble rounded-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Start Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark bg-opacity-75  ">
          <div className="text-center p-3 mb-0">
            © 2024 Copyright:
            <a
              className="text-white"
              href="https://startbootstrap.com/theme/freelancer/"
            >
              
              startbootstrap.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
