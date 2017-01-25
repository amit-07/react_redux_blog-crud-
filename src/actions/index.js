import 'whatwg-fetch'; //Using fetch api for fetching data.

export const FETCH_POSTS = 'FETCH_POSTS'; //Constatnt FETCH_POSTS is defined for no confusion or typo
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'; 
const API_KEY = '?key=asdasdasdassdaeqqdc';

// Action creator for fetching posts:
export function fetchPosts(){
    const request = fetch(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request  
    };
}

// Action creator for creating new posts:
export function  createPost(props){
    var form = document.querySelector('form');
    const request = fetch(`${ROOT_URL}/posts${API_KEY}`, {
                            method: 'POST',
                            body: new FormData(form)
                        }, props);

    return{
        type: CREATE_POST,
        payload: request
    };
}