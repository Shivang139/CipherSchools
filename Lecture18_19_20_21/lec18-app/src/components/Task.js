import { formatDate } from "../utils/DateUtils";

// const Task= (props) => {
const Task= ({task:{title,description,createdDate}}) => {
    // console.log(props);
    return(
        <div className="card">
    <div className="content">
      <div className="header">
        {/* Go to gym */}
        {title}
      </div>
      <div class="meta">
        {/* Created Date:  */}
        {formatDate(createdDate)}
      </div>
      <div className="description">
        {/* Going to gym makes muscles strong. */}
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
    )
};


export default Task;