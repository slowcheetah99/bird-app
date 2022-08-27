import { createContext, useReducer } from "react";
// import { generatePosts } from "../../../Seed";
const posts = JSON.parse(localStorage.getItem("BIRD_APP_KEY"));

// localStorage.setItem("BIRD_APP_KEY", JSON.stringify(tweets));

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
    default:
      return state;
  }
};

export const BirdProvider = ({ children }) => {
  const posts = JSON.parse(localStorage.getItem("BIRD_APP_KEY"));
  const [state, dispatch] = useReducer(birdReducer, {
    posts,
    currPost: null,
  });

  return (
    <BirdContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BirdContext.Provider>
  );
};
