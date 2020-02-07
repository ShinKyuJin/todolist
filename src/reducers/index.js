import {combineReducers} from 'redux';

const initialState = {
    todoList: [
        {subject:'12',detail:'123',checked:false,},
        {subject:'123',detail:'123',checked:true,},
    ],
}

const todoApp = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_TODO" : {
            return {
                ...state,
                todoList:state.todoList.concat(
                    {
                        subject:action.subject,
                        detail:action.detail,
                        checked:false,
                    }
                )
            }
        }
        case "TOGGLE_TODO": {
            state.todoList.forEach(
                (obj) => {
                    if(obj.subject === action.subject) {
                        console.log(obj.checked);
                        obj.checked = !obj.checked;
                        console.log(obj.checked);
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
                    (val) => val.subject !== action.subject
                ),
            };
        }
        default : {
            return state;
        }
    }
}

export default combineReducers({
    todoApp: todoApp,
});