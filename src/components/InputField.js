import React, { Component } from "react"
import { connect } from "react-redux"
import {
  addTodoAction,
  addText,
  editAddTodo,
} from "../redux/action/addTodoAction"
import "./styles/inputField.scss"
import { FiCheckSquare } from "react-icons/fi"
import styled from "styled-components"

class InputField extends Component {
  handleChange = event => {
    this.props.addText(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.props.selected || this.props.selected === 0)
      this.props.editAddTodo({
        value: this.props.text,
        selected: this.props.selected,
      })
    else this.props.addTodo(this.props.text)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="textInput" className="label-input">
          Create your own list!
        </label>
        <div className="search-container">
          <input
            type="text"
            name="todo"
            value={this.props.text}
            placeholder="Enter the objectives..."
            className="input-todo"
            onChange={this.handleChange}
            id="textInput"
          />
          <button type="submit" className="submit-button">
            <Enter />
          </button>
        </div>
      </form>
    )
  }
}

const Enter = styled(FiCheckSquare)`
  color: #37678f;
  font-size: 1.8rem;
`

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodoAction(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj)),
})

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected,
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)
