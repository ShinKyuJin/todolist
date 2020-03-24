const ADD_TODO = 'ADD_TODO' as const;
const MODIFY_TODO_SUBJECT = 'MODIFY_TODO_SUBJECT' as const;
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS' as const;

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

type todosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof modifyTodoSubject>
  | ReturnType<typeof changeTodoStatus>;

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

      return [
        ...state.slice(0, action.id),
        newTodo,
        ...state.slice(action.id+1, state.length)
      ];
    }
      
    case CHANGE_TODO_STATUS: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index]};
      newTodo.status = action.status;
      
      return [
        ...state.slice(0, action.id),
        newTodo,
        ...state.slice(action.id+1, state.length)
      ];
    }
    default:
      return state;
  }
};

export default todos;
