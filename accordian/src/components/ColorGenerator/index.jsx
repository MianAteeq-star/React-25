import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000");
  const [typeOf, setTypeOf] = useState("hex");

  function handleHexColor() {
    let hex = "0123456789abcdef";
    let hash = "#";

    for (let i = 0; i < 6; i++) {
      hash += hex[Math.floor(Math.random() * 16)];
      console.log(hash);
    }
    setColor(hash);
  }

  function rbgGenerator() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgbColor = `rgb(${r},${g},${b})`;

    // console.log(color);

    console.log(rgbColor);
    setColor(rgbColor)
  }

  useEffect(() => {
  if(typeOf === "rgb") {
      rbgGenerator()
  }else{
      handleHexColor()
  }
  }, [typeOf])

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <button
          onClick={() => setTypeOf("hex")}
          className="bg-slate-500 rounded p-5 m-5"
        >
          Generate Hex Color
        </button>
        <button
          onClick={() => setTypeOf("rgb")}
          className="bg-blue-500 rounded p-5 m-5"
        >
          Generate RGB Color
        </button>
        <button
          onClick={typeOf === "rgb" ? rbgGenerator : handleHexColor}
          className="bg-green-500 rounded p-5 m-5"
        >
          Generate Random Color
        </button>

        <div className="flex justify-center items-center text-3xl text-center text-white w-full  h-90">
          <h1>{typeOf === "rgb" ? "RGB Color : " : "HEX Color : "} </h1>
          <h3> {color}</h3>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
