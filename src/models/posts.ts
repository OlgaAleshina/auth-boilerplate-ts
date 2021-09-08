import { actionCreatorFactory, DvaModelBuilder } from "dva-model-creator";
import { IPostsState } from "@/common/index";
import * as postService from '../services/posts';

const initState: IPostsState = {
    posts: [],
    postsError: null
  };

const namespace = "postsStore"
const actionCreator = actionCreatorFactory(namespace);

export const savePosts = actionCreator<Array>("savePosts");
export const getPosts = actionCreator<A>("getPosts");


const builder = new DvaModelBuilder<IPostsState>(initState, namespace)
  .case(savePosts, (state, payload)=>{
      return {...state, posts: payload}
  })
  .takeEvery(getPosts, function *(payload, { call, put }) {
      try {
          const res = yield call(postService.getPosts);
          yield put(savePosts(res))

      } catch(error) {
          yield put({
            type: 'postsError',
            payload: error.message
          })
      }
  })
  
  

export default builder.build();

export const actions = {
  getPosts
};