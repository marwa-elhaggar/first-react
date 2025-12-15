import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="body d-flex flex-column justify-content-around align-items-center  mt-5 pt-5  ">
        <div>
          <h1 className="text-center   text-white star text-center mt-5 pt-5 text-uppercase fw-bolder star">about component</h1>
         
        </div>
        <div className=" container d-flex w-50 gap-5 m-0">
          <div className="row">
            <p className="text-center text-white col-md-6 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-center text-white col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
