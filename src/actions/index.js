let todoId = 0;
export const addTodo = (subject,detail) => {
    return {
        type:"ADD_TODO",
        itemId: todoId++,
        subject: subject,
        detail: detail,
    };
};

export const toggleTodo = (subject) => {
    return {
        type: "TOGGLE_TODO",
        subject: subject,
    };
};

export const removeTodo = (subject) => {
    return {
        type: "REMOVE_TODO",
        subject: subject,
    }
}