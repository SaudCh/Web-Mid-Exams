import React from "react";

export default function error() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-light" style={{ fontSize: 50 }}>
        Invalid Link
      </h1>
    </div>
  );
}
