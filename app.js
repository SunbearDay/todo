const elNewTodoInput = document.querySelector(".input-add-todo")
const elAddTodo = document.querySelector(".button-add-todo")
const elListOfTodos = document.querySelector(".todo-list")

const todos = []

const getTodoById = (id) => {
  return todos.find((todo) => todo.id === id)
}

const createNewTodoElement = (todo) => {
	const elTodo = document.createElement("li")
	const elCheckbox = document.createElement("input")
	const elLabel = document.createElement("label")
  const elButton = document.createElement("button")

  elButton.textContent = "X"
  elButton.addEventListener("click", removeTodoElement)

  elCheckbox.addEventListener("click", todoChecked)

	elCheckbox.setAttribute("type", "checkbox")
	elCheckbox.setAttribute("id", todo.id)
  elLabel.append(elCheckbox)
  elLabel.append(document.createTextNode(todo.title))
	elTodo.append(elLabel)
	elTodo.append(elButton)

	return elTodo
}

const todoChecked = (event) => {
  console.log(getTodoById(event.target.id))
}

const removeTodoElement = (event) => {
  event.target.removeEventListener("click", removeTodoElement)
  // Remove item from todos array.
  event.target.parentNode.remove()
}

const addTodo = () => {
  if (!elNewTodoInput.value.length) {
    alert("Type in a todo to be done.")
    return
  }

  const newTodo = {
    id: `todo_${todos.length}`,
    title: elNewTodoInput.value,
    complete: false
  }

  todos.push(newTodo)
  
	elListOfTodos.append(createNewTodoElement(newTodo))

  console.log(todos)
}

elAddTodo.addEventListener("click", addTodo)

