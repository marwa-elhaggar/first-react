


export default function Card(props) {
 
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card position-relative">
          <div className=" layer position-absolute bg-success start-0 end-0 bg-success d-flex justify-content-center align-items-center h-100  opacity-0 ">
            <i
              className="fa-solid fa-plus "
              onClick={() => {
               props.setModalOpen(true);
               props.setImage(props.photo);
              }}
            ></i>
          </div>
          <img src={props.photo} className="card-img-top" alt="Project 1" />
        </div>
      </div>
         
    </>
  );
}
