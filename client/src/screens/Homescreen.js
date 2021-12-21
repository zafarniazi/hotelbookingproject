import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

function Homescreen() {
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [rooms, setrooms] = useState([]);
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = await (await axios.get("/api/rooms/getallrooms")).data;
        console.log(data);
        setrooms(data);

        setloading(false);
      } catch (e) {
        seterror(true);
        console.error(e);
        setloading(false);
      }
    }
    fetchData();
  }, []);

  function filterByDate(dates) {
    console.log(moment(dates[0]).format("DD-MM-YYYY"));
    console.log(moment(dates[1]).format("DD-MM-YYYY"));
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>
      <div className="row  justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return (
              <div className="com-md-9 mt-2">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Homescreen;
