import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mt-5  d-flex flex-column  justify-content-center align-items-center contact">
        <h1 className="star text-center mt-5 pt-5 text-uppercase fw-bolder star">
          contact section
        </h1>
        <form action="" className="">
          <input type="text" placeholder="userName" className="w-100 b" />
          <input type="text" placeholder="userAge" />
          <input type="email" placeholder="userEmail" />
          <input type="password" placeholder="userPassword" />
          <textarea placeholder="message"></textarea>
          <button type="button">send message</button>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}
