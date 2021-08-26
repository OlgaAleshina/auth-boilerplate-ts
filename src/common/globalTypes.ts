import { Dispatch } from "redux";
import { History } from "history";

export interface IGlobalProps {
    history: History;
    dispatch: Dispatch<any>;
  }
  