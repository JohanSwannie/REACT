import React from "react";

const ListOfTasks = (props) => {
  return <h5>We will have to learn {props.tasks.join(", ")}</h5>;
}

class Tasks extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h4>Tasks to Perform</h4>
        <h4> Today </h4>
        <ListOfTasks tasks={['HTML5', 'CSS3', 'Bootstrap', 'SASS']} />
        <h4> Tomorrow </h4>
        <ListOfTasks tasks={['JavaScript', 'JQuery', 'REACT', 'REDUX']} />
      </div>
    );
  }
};

export default Tasks;
