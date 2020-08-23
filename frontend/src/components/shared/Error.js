import React from "react";
import axios from "../../axios";

export default function Error() {
  return (
    <div className="swing-in-top-fwd">
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1>Error</h1>
        <p>Please contact administrator</p>
        <button
          className="btn btn-dark shadow"
          onClick={() =>
            axios
              .get("signOut/")
              .then(() => {
                window.location.reload();
              })
              .catch((err) => {
                window.location.reload();
              })
          }
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
