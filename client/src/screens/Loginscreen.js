import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Sucess";
import Sucess from "../components/Sucess";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  }, []);

  async function login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = await (await axios.post("/api/users/login", user)).data;
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      seterror(true);
      setloading(false);
      console.log(error);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loader />}
          {error && <Error />}
          {success && <Sucess />}
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control mt-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button
              onClick={login}
              className="btn btn-primary  mt-3 mb-3 rounded-pill"
            >
              LOGIN
            </button>
            <br />
            <Link to={`/register`}>
              <button className="btn btn-primary  btn btn-space ">
                Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
