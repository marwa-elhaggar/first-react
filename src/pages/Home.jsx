import profile from "../assets/images/avatar.svg";
import Navbar from "./../components/Navbar.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex flex-column justify-content-center align-items-center  mt-5 pt-5  text-white body mb-0 ">
       
        <div>
          <img src={profile} alt="profile" className=" profile" />
        </div>
        <h2 className="star text-center mt-5  text-uppercase fw-bolder star ">start Framework</h2>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      <Footer></Footer>
    </>
  );
}
