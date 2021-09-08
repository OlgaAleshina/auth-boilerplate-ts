import React, { useEffect } from "react";
import { connect } from 'dva';
import { IPostsState, IGlobalProps } from "@/common/index";


const mapStateToProps = (state: {postsStore: IPostsState}) => {
  const {posts, postsError} = state.postsStore
  return {
    //loading: state.loading.models.users,
    posts,
    postsError
  };
}

type PageStateProps = ReturnType<typeof mapStateToProps>;
type PageProps = PageStateProps & IGlobalProps;

const Dashboard: React.FC<PageProps> = ({dispatch}) => {

  useEffect(() => {
     dispatch({type: "postsStore/getPosts"})
   }, [])


  return (
      <h1>
        Hi  from React! Welcome to dashboard!
      </h1>
);
}

export default connect(mapStateToProps)(Dashboard);