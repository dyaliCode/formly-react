import { IForm } from "../../types";
import { StateContext } from "./state";
import { IContact } from "./types";

export enum ActionType {
  ADD_CONTACT = "Add contact",
  REMOVE_CONTACT = "Remove contact",
  SIGN_IN = "Log out",
  SIGN_OUT = "Sign out",
  ADD_FORM = "ADD FORM",
}

export type Action =
  | { type: ActionType.ADD_CONTACT; payload: IContact }
  | { type: ActionType.REMOVE_CONTACT; payload: IContact }
  | { type: ActionType.SIGN_IN }
  | { type: ActionType.SIGN_OUT }
  | { type: ActionType.ADD_FORM; payload: IForm };

export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CONTACT:
      return { ...state, contacts: state.contacts.concat(action.payload) };
    case ActionType.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id === action.payload.id),
      };
    case ActionType.SIGN_IN:
      return { ...state, isAuthenticated: true, forms: [] };
    case ActionType.SIGN_OUT:
      return { ...state, isAuthenticated: false, forms: [] };
    case ActionType.ADD_FORM:
      return { ...state, forms: action.payload };
    default:
      throw new Error("Not among actions");
  }
};
