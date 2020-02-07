let todoId = 2;
export const addTodo = (subject, detail) => ({
  type: 'ADD_TODO',
  // eslint-disable-next-line no-plusplus
  itemId: todoId++,
  subject,
  detail,
}
);

export const toggleTodo = (itemId) => ({
  type: 'TOGGLE_TODO',
  itemId,
});

export const removeTodo = (itemId) => ({
  type: 'REMOVE_TODO',
  itemId,
});

export const modifyTodo = (itemId, subject, detail) => ({
  type: 'MODIFY_TODO',
  itemId,
  subject,
  detail,
});
