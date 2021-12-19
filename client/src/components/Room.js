import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal, Button, Carousel } from "react-bootstrap";

function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img
          src={room.imageurls[0]}
          alt="Flowers in Chania"
          className="smallimg"
        ></img>
      </div>
      <div className="col-md-7">
        <b>
          <h1>{room.name}</h1>
          <p>Max count: {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p> type :{room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className="btn btn-primary  btn btn-space ">
              Book Now
            </button>
          </Link>
          <button
            className="btn btn-primary  btn btn-space"
            onClick={handleShow}
          >
            View details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel nextLabel="" prevLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    src={url}
                    className="img-fluid"
                    style={{ height: "300px" }}
                    alt="abc"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
