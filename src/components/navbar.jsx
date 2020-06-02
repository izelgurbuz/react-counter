import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {"Total Counter : #" + totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
