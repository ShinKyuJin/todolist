import { combineReducers } from 'redux';

const initialState = {
    todoList: [
        { itemId: 0, subject: '12', detail: '123', checked: false, },
        { itemId: 1, subject: '123', detail: '123', checked: true, },
    ],
}

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: state.todoList.concat(
                    {
                        itemId: action.itemId,
                        subject: action.subject,
                        detail: action.detail,
                        checked: false,
                    }
                )
            }
        }
        case "TOGGLE_TODO": {
            state.todoList.forEach(
                (obj) => {
                    if (obj.itemId === action.itemId) {
                        obj.checked = !obj.checked;
                    }
                }
            );
            return {
                ...state,
                todoList: [...state.todoList],
            };
        }
        case "REMOVE_TODO": {
            return {
                ...state,
                todoList: state.todoList.filter(
                    (val) => val.itemId !== action.itemId
                ),
            };
        }
        case "MODIFY_TODO": {
            state.todoList.forEach(
                (obj) => {
                    if (obj.itemId === action.itemId) {
                        obj.subject = action.subject;
                        obj.detail = action.detail;
                    }
                }
            )
            return {
                ...state,
                todoList: [...state.todoList],
            };
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    todoApp: todoApp,
});