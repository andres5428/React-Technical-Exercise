import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import "./styles/todoList.scss";

const Todoslist = props => {
  return (
    <div className="todo-container">
      {props.todos.map((item, pos) => {
        return <Todo key={pos} todo={item} idx={pos} />
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(Todoslist)
