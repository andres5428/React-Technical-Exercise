export const addText = value => {
    return {
        type: 'ADD_TEXT',
        payload: value
    }
}

export const addTodoAction = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = key => {
    return {
        type: "DELETE_TODO",
        payload: key
    }
}

export const editTodo = key => {
    return {
        type: 'EDIT_TODO',
        payload: key,
    }
}

export const editAddTodo = obj => ({
    type: 'EDIT_ADD_TODO',
    payload: obj
})