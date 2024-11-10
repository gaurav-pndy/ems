import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-9 py-6 w-[45%] bg-orange-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-green-600 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
