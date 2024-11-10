import React from "react";

const ActiveTask = ({ task }) => {
  return (
    <div className=" flex-shrink-0 w-[300px] h-full bg-green-600 rounded-xl p-5">
      <div className="flex justify-between items-center ">
        <h3 className="px-3 py-1 text-sm rounded-lg bg-red-600">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.date} </h4>
      </div>

      <h2 className="mt-5 mb-2 text-2xl font-semibold">{task.title} </h2>
      <p className="text-sm">{task.description}</p>
      <div className="flex justify-between mt-5">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
