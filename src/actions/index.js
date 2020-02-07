let todoId = 2;
export const addTodo = (subject, detail) => {
    return {
        type: "ADD_TODO",
        itemId: todoId++,
        subject: subject,
        detail: detail,
    };
};

export const toggleTodo = (itemId) => {
    return {
        type: "TOGGLE_TODO",
        itemId: itemId,
    };
};

export const removeTodo = (itemId) => {
    return {
        type: "REMOVE_TODO",
        itemId: itemId,
    }
}

export const modifyTodo = (itemId, subject, detail) => {
    return {
        type: "MODIFY_TODO",
        itemId: itemId,
        subject: subject,
        detail: detail,
    }
}