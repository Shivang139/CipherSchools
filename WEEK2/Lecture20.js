import { useState } from "react";
import Task from "../Component/task";
// const TodoScreen = () => {
//     const  [taskcount, settaskcount] = useState(0);
//     return(
//         <div className="screen">         <h1 className="ui-heading center">To Do List</h1>             <div>
//                        <button onClick={(e)=>{
//                             settaskcount(taskcount+1);

//                         }} className="ui secondary button">Add Task</button>
//                         <p>The number of Tasks are: {taskcount}</p>
//                     </div>
//                     </div>
//     )
// }

const TodoScreen = () => {
  const [taskList, settaskList] = useState([]);
  return (
    <div className="screen">
      <h1 className="ui-heading center">To Do List</h1>
      <div>
        <button
          onClick={(e) => {
            settaskList([
              ...taskList,
              {
                title: "Go to gym",
                discription: "Going to gym is good for muscle grow",
              },
            ]);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        {taskList.map((task) => (
          <Task />
        ))}
      </div>
    </div>
  );
};
export default TodoScreen;

// this is the codee which is done in lec 20 and the changes are done under the folder name Lecture18_19_20_21 inside screens and components folder in file name ToDoScreen and Task
