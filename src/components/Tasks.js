import { Task } from "./Task";
export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, idx) => (
        <Task key={idx} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};
