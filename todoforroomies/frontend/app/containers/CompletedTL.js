import React from 'react';
import OneToDo from "../components/OneToDo";

const CompletedTL = React.createClass ({
  render: function() {
    const singleToDo = this.props.data.map((todo,index) => {
      return(
        <div key={index}>
          <OneToDo handleCheckBox={this.props.handleCheckBox} ToDoItem={todo} parentComponent="CompletedTL" />
        </div>
      )
    })
    return (
      <div className="completed-container">
        <div className="container-title">
          <h3>Completed</h3>
        </div>
        <div className="completed-todos for-all-containers">
          {singleToDo}
        </div>
      </div>
    )
  }
})

export default CompletedTL;
