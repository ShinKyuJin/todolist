const ADD_TODO = 'ADD_TODO' as const;
const MODIFY_TODO_SUBJECT = 'MODIFY_TODO_SUBJECT' as const;

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

type todosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof modifyTodoSubject>;

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
    case ADD_TODO:
      return state.concat({
        id: nextId++,
        subject: action.subject,
        detail: [],
        start: action.start,
        end: action.end,
        status: todoStatus.PROGRESS
      });
    case MODIFY_TODO_SUBJECT:
      const index = state.findIndex((todo) => todo.id === action.id);
      state[index].subject = action.subject;

      return state;
    default:
      return state;
  }
};

export default todos;
