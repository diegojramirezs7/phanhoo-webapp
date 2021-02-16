// @ts-check
import { FETCH_HOME_PAGE, JOIN_COMMUNITY } from '../action-types';

export function fetch_home_page(payload) {
    return {
        type: FETCH_HOME_PAGE,
        payload: payload
    };
}

export function joinCommunity(payload) {
    return {
        type: JOIN_COMMUNITY,
        payload: payload
    };
}

export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}