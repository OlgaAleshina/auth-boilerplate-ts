import React from "react";
import { connect } from 'dva';
import { IPostsState, IGlobalProps} from "@/common"; 

const mapStateToProps = (state: {postsStore: IPostsState}) => {
    const {chosenPost } = state.postsStore;
    return {chosenPost}
}

type PageStateProps = ReturnType<typeof mapStateToProps>;
type PageProps = PageStateProps & IGlobalProps;

const SinglePost: React.FC<PageProps> = ({dispatch, chosenPost}) => {
   
    //use tree to display comments
    //comment for single comment
    return <>
        <div>{chosenPost?.text}</div>
            </>
}

export default connect(mapStateToProps)(SinglePost)