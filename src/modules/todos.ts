const ADD_TODO = 'ADD_TODO' as const;

export const addTodo = (subject: string, until: string) => ({
  type: ADD_TODO,
  subject,
  until
});

type todosAction =
  | ReturnType<typeof addTodo>;

export type todo = {
  key: number;
  subject: string;
  comment: Array<string>;
  until: string;
};

type todosState = todo[];

const initialState: todosState = [];

let nextKey = 0;

const todos = (state: todosState = initialState, action: todosAction) => {
  switch(action.type) {
    case ADD_TODO:
      return state.concat({
        key: nextKey++,
        subject: action.subject,
        comment: [],
        until: action.until
      });
    default:
      return state;
  }
};

export default todos;
