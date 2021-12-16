import React, { useState, useEffect } from "react";
import axios from "axios";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [pasword, setpasword] = useState("");

  async function login() {
    try {
      const user = { email, pasword };
      const result = await axios.post("/api/users/login", user).data;
    } catch (error) {
      console.log(error);
    }
    const user = { email, pasword };
    console.log(user);
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <div>
            <h1>Login</h1>

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

            <button className="btn btn-primary mt-4" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
