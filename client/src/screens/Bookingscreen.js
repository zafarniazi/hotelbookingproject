import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function Bookingscreen() {
  const { id } = useParams();
  const { fromdate } = useParams();
  const { todate } = useParams();

  const totaldays = 4;

  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();
  const [totalamount, settotalamount] = useState();

  console.log({ fromdate });

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = await (
          await axios.post("/api/rooms/getroombyid", { roomid: id })
        ).data;
        console.log(data);
        settotalamount(data.rentperday * totaldays);
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
  async function bookRoom() {
    const bookigDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser")),
      fromdate,
      todate,
      totalamount,
      totaldays,
    };
    try {
      const result = await axios.post("api/bookings/bookroom", bookigDetails);
    } catch (error) {
      console.log(error);
    }
  }

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
                  <b>Booking Details </b>
                </h1>
                <hr />

                <p>
                  <b>Name</b>
                </p>
                <p>
                  <b>From Date {fromdate}</b>
                </p>
                <p>
                  <b>To Date {todate} </b>
                </p>
                <p>
                  <b>Max Count : {room.maxcount} </b>
                </p>
              </div>

              <div className="mt-5">
                <h1>
                  <b>Amount </b>
                </h1>
                <hr />
                <p>
                  Total Days : {totaldays} <b></b>
                </p>
                <p>
                  Rent Per Day : <b>{room.rentperday}</b>
                </p>
                <h1>
                  <b>Total Amount : {totalamount}/-</b>
                </h1>
              </div>
              <div style={{ float: "right" }}>
                <button className="btn btn-primary" onClick={bookRoom}>
                  pay now
                </button>
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
