const ADD_TODO = 'ADD_TODO' as const;
const MODIFY_TODO_SUBJECT = 'MODIFY_TODO_SUBJECT' as const;
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS' as const;
const DEL_TODO = 'DEL_TODO' as const;

export const addTodo = (subject: string, start: string, end: string) => ({
  type: ADD_TODO,
  subject,
  start,
  end
});

export const modifyTodoSubject = (id: number, subject: string) => ({
  type: MODIFY_TODO_SUBJECT,
  id,
  subject
});

export const changeTodoStatus = (id: number, status: number) => ({
  type: CHANGE_TODO_STATUS,
  id,
  status
});

export const delTodo = (id: number) => ({
  type: DEL_TODO,
  id
});

type todosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof modifyTodoSubject>
  | ReturnType<typeof changeTodoStatus>
  | ReturnType<typeof delTodo>;

export enum todoStatus {
  PROGRESS,
  HOLD,
  DONE
}

export type todo = {
  id: number;
  subject: string;
  detail: Array<string>
  start: string;
  end: string;
  status: todoStatus;
};

type todosState = todo[];

const initialState: todosState = [];

let nextId = 0;

const todos = (state: todosState = initialState, action: todosAction) => {
  switch(action.type) {
    case ADD_TODO: {
      return state.concat({
        id: nextId++,
        subject: action.subject,
        detail: [],
        start: action.start,
        end: action.end,
        status: todoStatus.PROGRESS
      });
    }
    case MODIFY_TODO_SUBJECT: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index]};
      newTodo.subject = action.subject;

      const newState = [...state.filter((todo) => todo.id !== action.id)];
      newState.push(newTodo);

      return newState;
    }
      
    case CHANGE_TODO_STATUS: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index]};
      newTodo.status = action.status;

      const newState = [...state.filter((todo) => todo.id !== action.id)];
      newState.push(newTodo);
      
      return newState;
    }
    case DEL_TODO: {
      return [
        ...state.filter((todo) => todo.id !== action.id)
      ];
    }
    default:
      return state;
  }
};

export default todos;
