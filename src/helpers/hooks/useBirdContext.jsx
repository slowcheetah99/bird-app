import { useContext } from "react";
import { BirdContext } from "../context/context";

export const useBirdContext = () => {
  const context = useContext(BirdContext);
  if (!context) {
    throw Error("App must be wrapped in Bird Context");
  }
  return context;
};
