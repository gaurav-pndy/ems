import React from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="classList"
      className="flex items-center justify-start gap-5 h-[55%] w-full overflow-x-auto py-5 mt-10"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <ActiveTask key={idx} task={task} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} task={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} task={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
