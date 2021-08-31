import { actionCreatorFactory, DvaModelBuilder } from "dva-model-creator";
import { IAuthState, FormProps } from "@/common/index";
import * as authService from '../services/auth';
import { router } from 'umi';


const initState: IAuthState = {
    isLogged: false,
    authError: null,
  };

const actionCreator = actionCreatorFactory("auth");

export const log = actionCreator<boolean>("log");
export const authError = actionCreator<string>("authError");
export const login = actionCreator<FormProps>("login");
export const signup = actionCreator<FormProps>("signup")


const builder = new DvaModelBuilder<IAuthState>(initState, "auth")
  .case(log, (state, payload) => {
      return { ...state, isLogged: payload}
  })
  .case(authError, (state, payload) => {
    return { ...state, authError: payload }
  })
  .takeEvery(login, function *(payload, { call, put }) {
      try {
          yield call(authService.login, payload);
          yield put({
            type: 'log',
            payload: true
        })
          yield router.push("/dashboard")

      } catch(error) {
          yield put({
            type: 'authError',
            payload: error.message
          })
      }
  })
  .takeEvery(signup, function *(payload, {call, put}){
      try {
        yield call(authService.signup, payload);
        yield put({
          type: "log",
          payload: true
        })
        yield router.push("/dashboard")
      }
      catch(error) {
        yield put({
          type: "authError",
          payload: error.message
        })
      }
  })
  
  

export default builder.build();

export const actions = {
  log,
  authError,
};