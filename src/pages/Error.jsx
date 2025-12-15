import Navbar from "../components/Navbar"
import Footer from "../components/footer";

export default function Error() {
  return (
    <>
    <Navbar></Navbar>
    <div className='pg-light  d-flex justify-content-center align-items-center error-page'>
        <h1 className='text-center mt-5 pt-5'>404 Error! Page Not Found</h1>
    </div>
    <Footer></Footer>
    </>
  )
}
