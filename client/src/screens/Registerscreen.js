import axios from "axios";
import React, { useEffect, useState } from "react";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pasword, setpasword] = useState("");
  const [cpasword, setcpasword] = useState("");
  async function register() {
    if (pasword === cpasword) {
      const user = { name, email, pasword, cpasword };
      console.log(user);
      try {
        const result = await axios.post("/api/users/register", user).data;
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password not match");
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
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
              placeholder="pasword"
              value={pasword}
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
