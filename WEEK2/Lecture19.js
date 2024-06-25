import {Component} from "react";

class ToDoScreen extends Component{
  state={
    taskCount:0,
  }
  render(){
return(
  <div className="screen">
  <h1 className="ui heading center"> ToDo List </h1>
  <div>
    <button onClick={(e)=>{
      this.setState({
        ...this.state,taskCount:this.state.taskCount+1,
      });
      console.log(this.state.taskCount);
      // this.taskCount++;
      // console.log(this.taskCount);
      // console.log("Add task button clicked");
    }} className="ui secondary button">Add Task</button>
    <p>The number of tasks are: {this.state.taskCount}</p>
  </div>
  </div>
)
  }
}


// this is the codee which is done in lec 19 and the changes are done under the folder name Lecture18_19_20_21 inside screens folder in file name ToDoScreen