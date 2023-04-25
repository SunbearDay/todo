# todo list

- [] If a todo is checked, update the `complete` state.
- [] Insert a delete todo icon for each todo.
- [] Use `localStorage` to save the state of the todo list.

## function createNewTodoElement(todoTitle: string)

Returns a new `li` element to be appended to our list of todos:

```html
<li>
  <label>
    <input type="checkbox">
    { todoTitle }
  </label>
</li>
```


