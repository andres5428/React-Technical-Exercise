import React from "react"
import { connect } from "react-redux"
import { deleteTodo, editTodo } from "../redux/action/addTodoAction"
import "./styles/todoList.scss"
import styled from "styled-components"
import { BsTrash } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"

const Todo = props => {
  return (
    <div className="todo-item">
      <div>{props.selected === props.idx ? props.text : props.todo}</div>
      <div className="icons-container">
        <button
          className="icon-modify-container"
          onClick={() => props.editTodo(props.idx)}
          onKeyDown={() => props.deleteTodo(props.idx)}
        >
          {<Modify />}
        </button>
        <button
          onClick={() => props.deleteTodo(props.idx)}
          onKeyDown={() => props.deleteTodo(props.idx)}
          className="icon-trash-container"
        >
          {<Trash />}
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key)),
})

const Trash = styled(BsTrash)`
  color: #37678f;
`
const Modify = styled(AiFillEdit)`
  color: #37678f;
`
const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected,
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
