import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookingscreen() {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = await (
          await axios.post("/api/rooms/getroombyid", { roomid: id })
        ).data;
        console.log(data);
        setroom(data);

        setloading(false);
      } catch (e) {
        seterror(true);
        console.error(e);
        setloading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : room ? (
        <div className=" bsd">
          <div className="row">
            <div className="col-md-5">
              <h1> {room.name}</h1>
              <img
                src={room.imageurls[0]}
                style={{ height: "300px" }}
                alt="abc"
              />
            </div>
            <div className="col-md-5">
              <div>
                <h1>
                  <b>Booking Details</b>
                </h1>
                <hr />

                <p>
                  <b>Name</b>
                </p>
                <p>
                  <b>From Date</b>
                </p>
                <p>
                  <b>To Date</b>
                </p>
                <p>
                  <b>Max Count : {room.maxcount} </b>
                </p>
              </div>

              <div className="mt-5">
                <h1>
                  <b>Amount</b>
                </h1>
                <hr />
                <p>
                  Total Days : <b></b>
                </p>
                <p>
                  Rent Per Day : <b>{room.rentperday}</b>
                </p>
                <h1>
                  <b>Total Amount : /-</b>
                </h1>
              </div>
              <div style={{ float: "right" }}>
                <button className="btn btn-primary">pay now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>
          <Error />
        </h1>
      )}
    </div>
  );
}

export default Bookingscreen;
