export interface IPost {
        id: number,
        text: string,
        created_at?: string,
        comments?: {}[],
}
export interface IPostsState {
    posts: IPost[],
    postsError: string | null,
    chosenPost: IPost | null
}
