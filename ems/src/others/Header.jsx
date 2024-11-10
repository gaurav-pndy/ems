import React from "react";

const Header = ({ data }) => {
  function handleLogOut() {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl ">
        Hello <br /> <span className="text-3xl font-semibold">Name👋</span>
      </h1>
      <button
        onClick={handleLogOut}
        className="bg-red-600 rounded text-lg font-medium px-3 py-1"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
