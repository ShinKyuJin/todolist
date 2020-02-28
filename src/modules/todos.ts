const ADD_TODO     = 'ADD_TODO' as const;
const TOGGLE_TODO  = 'TOGGLE_TODO' as const;
const REMOVE_TODO  = 'REMOVE_TODO' as const;
const MODIFY_TODO  = 'MODIFY_TODO' as const;

export const addTodo = (subject: string, detail:string) => ({
  type: ADD_TODO,
  subject,
  detail,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  id,
});

export const modifyTodo = (id: number, subject: string, detail: string) => ({
  type: MODIFY_TODO,
  id,
  subject,
  detail,
});

type todosAction = 
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof modifyTodo>;


export type todo = {
  id      : number;
  subject : string;
  detail  : string;
  checked : boolean;
}

type todosState = todo[];

const initialState: todosState = [];
let nextId = 0;

const todos = (state: todosState = initialState, action: todosAction): todosState => {
  switch(action.type) {
    case ADD_TODO: {
      return state.concat({
        id: nextId++,
        subject: action.subject,
        detail: action.detail,
        checked: false,
      });
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case MODIFY_TODO: {
      state.forEach((target) => {
        if (target.id === action.id) {
          target.subject = action.subject;
          target.detail = action.detail;
          console.log(target);
        }
      });
      console.log(action);
      return state;
    }
    default: {
      return state;
    }
  }
}

export default todos;