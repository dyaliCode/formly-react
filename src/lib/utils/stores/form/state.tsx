import React, { useContext, useState, useReducer } from "react";
import { IContact } from "./types";
import { reducer, Action } from "./reducer";
import { IForm } from "../../types";

export interface StateContext {
  isAuthenticated: boolean;
  contacts: IContact[];
  _forms: IForm[];
}

export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
}

const data: IContact[] = [
  {
    id: 1,
    name: "Ted",
    phone: "+1-541-754-3010",
    address: "Street 1",
    isPrivate: true,
  },
  {
    id: 2,
    name: "Ted 2",
    phone: "+1-541-154-8377",
    address: "Street 2",
    isPrivate: false,
  },
  {
    id: 3,
    name: "Ted 3",
    phone: "+1-541-763-9221",
    address: "Street 3",
    isPrivate: false,
  },
];

const defaultState: StateContext = {
  isAuthenticated: false,
  contacts: data,
  _forms: [],
};
const myContext = React.createContext<Store>({ state: defaultState });

export const useStateContext = () => useContext(myContext);

export const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return <myContext.Provider value={{ state, dispatch }} children={children} />;
};
