import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Modal from "../components/Modal";
import photo1 from "../assets/images/port2.png";
import photo2 from "../assets/images/poert1.png";
import photo3 from "../assets/images/port3.png";
import { useState } from "react";

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState("");
  return (
    <>
      <Navbar></Navbar>
       <div className="d-flex flex-column justify-content-center align-items-center" >
        <h1 className="text-center  pt-5 text-uppercase fw-bolder star ">portfolio component</h1>
      <div className="container bg-light p-5 mb-5">
       
        <div className="row">
          <Card photo={photo1} setModalOpen={setModalOpen} setImage={setImage}></Card>
          <Card photo={photo2} setModalOpen={setModalOpen} setImage={setImage}></Card>
          <Card photo={photo3} setModalOpen={setModalOpen} setImage={setImage}></Card>
          <Card photo={photo1} setModalOpen={setModalOpen} setImage={setImage}></Card>
          <Card photo={photo2} setModalOpen={setModalOpen} setImage={setImage}></Card>
          <Card photo={photo3} setModalOpen={setModalOpen} setImage={setImage}></Card>
        </div>
        
      </div>
       </div>
      <Footer></Footer>
      {modalOpen && <Modal setModalOpen={setModalOpen} image={image}></Modal>}
    </>
  );
}
