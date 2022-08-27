import { createContext, useReducer } from "react";
export const BirdContext = createContext();

export const birdReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_POST":
      return {
        ...state,
        currPost: action.payload,
      };
    case "CREATE_POSTS":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        user: action.payload,
      };
    case "SET_USER":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "SET_VISIBLE":
      return {
        ...state,
        visible: true,
      };
    default:
      return state;
  }
};

export const BirdProvider = ({ children }) => {
  const posts = JSON.parse(localStorage.getItem("BIRD_APP_KEY"));
  const [state, dispatch] = useReducer(birdReducer, {
    posts,
    currPost: null,
    visible: false,
    users: JSON.parse(localStorage.getItem("BIRD_APP_USERS")) || [],
    user: null
  });

  return (
    <BirdContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BirdContext.Provider>
  );
};
