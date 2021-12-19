import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Sucess from "../components/Sucess";

function Registerscreen() {
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const [cpasword, setcpasword] = useState("");
  const [success, setsuccess] = useState(false);
  async function register() {
    if (password === cpasword) {
      const user = { name, email, password, cpasword };
      console.log(user);
      try {
        setloading(true);
        const result = await axios.post("/api/users/register", user).data;
        setsuccess(true);
        setloading(false);
        setemail("");
        setname("");
        setcpasword("");
        setpasword("");
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    } else {
      alert("Password not match");
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {success && <Sucess message="Registration sucess" />}
          <div>
            <h1>Register</h1>

            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpasword(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="cpasword"
              value={cpasword}
              onChange={(e) => {
                setcpasword(e.target.value);
              }}
            />
            <button className="btn btn-primary mt-4" onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registerscreen;
