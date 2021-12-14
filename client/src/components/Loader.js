import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="sweet-loading text-center">
      <ClipLoader color="#0000" loading={loading} css={override} size={150} />
    </div>
  );
}

export default Loader;
