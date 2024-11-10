import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="allTasks" className="p-5 bg-[#1c1c1c] mt-5 rounded ">
      <div className="bg-green-900 mb-2 py-2 px-4 flex justify-between rounded text-center">
        <h2 className="text-lg font-medium w-1/5 ">Employee</h2>
        <h2 className="text-lg font-medium w-1/5 ">New Tasks</h2>
        <h2 className="text-lg font-medium w-1/5 ">Active Tasks</h2>
        <h2 className="text-lg font-medium w-1/5 ">Completed Tasks</h2>
        <h2 className="text-lg font-medium w-1/5 ">Failed Tasks</h2>
      </div>
      <div>
        {userData.map((emp, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#19191c] mb-2  flex justify-between rounded text-center border border-gray-400"
            >
              <h2 className="text-md w-1/5 py-2 px-4 ">{emp.firstName}</h2>
              <h2 className="text-md w-1/5 py-2 px-4 bg-orange-400">
                {emp.taskCount.newTask}{" "}
              </h2>
              <h2 className="text-md w-1/5 py-2 px-4 bg-green-700">
                {emp.taskCount.active}{" "}
              </h2>
              <h2 className="text-md w-1/5 py-2 px-4 bg-blue-400">
                {emp.taskCount.completed}{" "}
              </h2>
              <h2 className="text-md w-1/5 py-2 px-4 bg-red-500">
                {emp.taskCount.failed}{" "}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
