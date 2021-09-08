import { actionCreatorFactory, DvaModelBuilder } from "dva-model-creator";
import { IPostsState } from "@/common/index";
import * as postService from '../services/posts';
import { Effect } from "dva";

const initState: IPostsState = {
    posts: [],
    postsError: null, 
    chosenPost: null,
  };

const namespace = "postsStore"
const actionCreator = actionCreatorFactory(namespace);

export const savePosts = actionCreator<IPostsState["posts"]>("savePosts");
export const getPosts = actionCreator<Effect>("getPosts");
export const choosePost = actionCreator<IPostsState["chosenPost"]>("choosePost");


const builder = new DvaModelBuilder<IPostsState>(initState, namespace)
  .case(savePosts, (state, payload)=>{
      return {...state, posts: payload}
  })
  .case(choosePost, (state, payload) => {
    return {...state, chosenPost: payload}
  })
  .takeEvery(getPosts, function *(payload, { call, put }): Generator {
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
  getPosts,
  choosePost
};