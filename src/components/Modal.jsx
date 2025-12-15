


export default function Modal(props) {
  return (
    <>
      <div className=" modal position-fixed end-0 start-0  bg-dark bg-opacity-75 d-flex justify-content-center align-items-center top-0 z-3" onClick={()=>{
        props.setModalOpen(false);
      }}>
        <div className="w-25  ">
            <img src={props.image} alt="" />
        </div>
      </div>
    </>
  );
}
