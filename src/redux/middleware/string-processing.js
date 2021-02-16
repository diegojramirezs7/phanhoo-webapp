// @ts-check
import { JOIN_COMMUNITY } from '../action-types';

const forbidden_words = ["fart", "fuck", "fat", "cock"];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
    //you can access getState or dispatch
    return function (next) {
        return function (action) {

            if (action.type === JOIN_COMMUNITY) {
                const foundWord = forbidden_words.filter(word =>
                    action.payload.name.includes(word)
                );
                // if bad word found, dispatch action, else move to next middleware
                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }

            return next(action);
        }
    }
}

export function reorganize({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            //capitalize action payload
            return next(action);
        }
    }
}