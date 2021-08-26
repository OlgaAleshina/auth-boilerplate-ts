import { actionCreatorFactory, DvaModelBuilder } from "dva-model-creator";

interface IAuthState {
    isLogged: boolean | void,
    authError: string | null
}

const initState: IAuthState = {
    isLogged: false,
    authError: null,
  };

const actionCreator = actionCreatorFactory("auth");

export const log = actionCreator<IAuthState>("log");
export const authError = actionCreator("authError");


const builder = new DvaModelBuilder(initState, "auth")
  .case(log, (state, payload) => {
      return { isLogged: payload}
  })
  //.case(authError, ({ authError }) => ({ authError: payload }));
  .build();

export const actions = {
  log,
  authError,
};