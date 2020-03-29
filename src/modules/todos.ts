import moment from "moment";

const ADD_TODO = 'ADD_TODO' as const;
const MODIFY_TODO_SUBJECT = 'MODIFY_TODO_SUBJECT' as const;
const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS' as const;
const DEL_TODO = 'DEL_TODO' as const;
const ADD_TODO_DETAIL = 'ADD_TODO_DETAIL' as const;
const CHANGE_TODO_START = 'CHANGE_TODO_START' as const;
const CHANGE_TODO_END = 'CHANGE_TODO_END' as const;

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

export const addTodoDetail = (id: number, detail: string) => ({
  type: ADD_TODO_DETAIL,
  id,
  detail
});

export const changeTodoStart = (id: number, add: number) => ({
  type: CHANGE_TODO_START,
  id,
  add
});

export const changeTodoEnd = (id: number, add: number) => ({
  type: CHANGE_TODO_END,
  id,
  add
});

type todosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof modifyTodoSubject>
  | ReturnType<typeof changeTodoStatus>
  | ReturnType<typeof delTodo>
  | ReturnType<typeof addTodoDetail>
  | ReturnType<typeof changeTodoStart>
  | ReturnType<typeof changeTodoEnd>;

export enum todoStatus {
  PROGRESS,
  HOLD,
  DONE
}

export type todo = {
  id: number;
  subject: string;
  detail: string[]
  start: string;
  end: string;
  status: todoStatus;
};

type todosState = todo[];

const initialState: todosState = [];

let nextId = 0;

const sortTodoByDueTime = (state: todosState) => {
  const newState = [...state].sort(
    (a: todo, b: todo) => (
      moment(a.end).diff(b.end)
    )
  );

  return newState;
}

const todos = (state: todosState = initialState, action: todosAction) => {
  switch(action.type) {
    case ADD_TODO: {
      return sortTodoByDueTime(state.concat({
        id: nextId++,
        subject: action.subject,
        detail: [],
        start: action.start,
        end: action.end,
        status: todoStatus.PROGRESS
      }));
    }

    case MODIFY_TODO_SUBJECT: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index], subject: action.subject};

      return sortTodoByDueTime([...state.filter((todo) => todo.id !== action.id)].concat(newTodo));
    }

    case CHANGE_TODO_STATUS: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index], status: action.status};

      return sortTodoByDueTime([...state.filter((todo) => todo.id !== action.id)].concat(newTodo));
    }

    case DEL_TODO: {
      return [
        ...state.filter((todo) => todo.id !== action.id)
      ];
    }

    case ADD_TODO_DETAIL: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index], detail: state[index].detail.concat(action.detail)};

      return sortTodoByDueTime([...state.filter((todo) => todo.id !== action.id)].concat(newTodo));
    }
    
    case CHANGE_TODO_START: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index]};
      newTodo.start = moment(newTodo.start).add(action.add, 'days').format('YYYY-MM-DD');

      return sortTodoByDueTime([...state.filter((todo) => todo.id !== action.id)].concat(newTodo));
    }

    case CHANGE_TODO_END: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newTodo = {...state[index]};
      newTodo.end = moment(newTodo.end).add(action.add, 'days').format('YYYY-MM-DD');

      return sortTodoByDueTime([...state.filter((todo) => todo.id !== action.id)].concat(newTodo));
    }
    default:
      return state;
  }
};

export default todos;
