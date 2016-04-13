import React from 'react';
import OneToDo from "../components/OneToDo"

const TodoList = React.createClass ({
  render: function() {
    const singleToDo = this.props.data.map((todo,index) => {
      console.log("todo",todo);
      return (
        <div key={index}>
          <OneToDo ToDoItem={todo} parentComponent="todo" />
        </div>
      )
    });
    return (
      <div>
        <h3>To Do List</h3>
        <div className="unclaimed-todos">
          {singleToDo}
        </div>
      </div>
    )
  }
});

export default TodoList;
