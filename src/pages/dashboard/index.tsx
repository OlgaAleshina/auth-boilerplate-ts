import React, { useEffect } from "react";
import { connect } from 'dva';
import router from 'umi/router';
import { IPostsState, IGlobalProps } from "@/common/index";
import { List, Space, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';


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

const Dashboard: React.FC<PageProps> = ({dispatch, posts}) => {

  useEffect(() => {
     dispatch({type: "postsStore/getPosts"})
   }, [])

   const IconText = ({ icon, text }: { icon: any, text: number | undefined }) : JSX.Element => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const goToPost = (item:{id: number}): void => {
    dispatch({
      type: 'postsStore/choosePost',
      payload: item,
    });
      router.push(`/dashboard/${item.id}`)
  }

  return (
    <>
        <Typography.Title level={2}>Posts</Typography.Title>
        <List
            itemLayout="vertical"
            size="large"
            dataSource={posts}
            renderItem={item => (
                <List.Item
                  onClick={()=>goToPost(item)}
                  key={item.id}
                  actions={[<IconText icon={MessageOutlined} text={item.comments?.length} key="list-vertical-message" />]}
                >
                    {item.text}
                </List.Item>
            )}
        />
    </>
);
}

export default connect(mapStateToProps)(Dashboard);