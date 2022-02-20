import API from '../../utils/api';

export const getPost = (skip) => {
    return dispatch => {
        API.getSinglePosts(skip, res => {
            dispatch({
                type: "GOT_SITE_POSTS",
                payload: res.data,
                skip: skip
            })
        })
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getPostCount(res => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: res.data.count
            });
        })
    }
}