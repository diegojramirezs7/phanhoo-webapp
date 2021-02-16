// @ts-check
import ModelFactory from '../../models/model-factory';
import { FETCH_HOME_PAGE, JOIN_COMMUNITY } from '../action-types';

const initialState = {
    communities: [
        ModelFactory.createFromJson("Community", {
            name: "Soccer",
            members: 87,
            ranking: 10
        }),
        ModelFactory.createFromJson("Community", {
            name: "Basketball",
            members: 100,
            ranking: 7
        }),
        ModelFactory.createFromJson("Community", {
            name: "Hockey",
            members: 347,
            ranking: 1
        }),
        ModelFactory.createFromJson("Community", {
            name: "Baseball",
            members: 40,
            ranking: 44
        }),
    ],
    events: [
        {
            title: "Soccer Drop-in",
            time: "August, Friday 13, 2021 15:00",
            location: "Minoru Park",
            group: "Soccer",
            host: "Diego Ramirez"
        },
        {
            title: "Basketball Drop-in",
            time: "August, Monday 16, 2021 17:00",
            location: "Minoru Park",
            group: "Staples Arena",
            host: "Michael Jordan"
        },
        {
            title: "Baseball Drop-in",
            time: "August, Sunday 15, 2021 13:00",
            location: "Hillside Stadium",
            group: "Baseball",
            host: "Derek Jeter"
        },
        {
            title: "Surfing Drop-in",
            time: "August, Monday 8, 2021 12:00",
            location: "Nanaimo",
            group: "Surfing",
            host: "Ben Altman"
        }

    ],
    groups: [],
    users: [],
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HOME_PAGE:
            return state;
        case JOIN_COMMUNITY:
            return {
                ...state,
                communities: [
                    ...state.communities,
                    ModelFactory.createFromJson("Community", {
                        name: action.payload.name,
                        members: action.payload.members,
                        ranking: action.payload.ranking
                    })
                ]
            }
        default:
            return state;
    }
}


/**
 * redux middleware is a function that intercepts actions and performs some work before allowing to move to reducers
 * It's a function returning another function and takes next as a parameter
 * the inner function returns another function which takes action as parameter
 * then returns next(action)
 */


function forbiddenWordsMiddleware({ getState, dispatch }) {
    //you can access getState or dispatch
    return function (next) {
        return function (action) {
            // do stuff
            //always call next(action) in middleware
            //if you forget, redux will stop and no other actions will reach reducers
            // this moves the app forwared by calling next middleware layer
            return next(action);
        }
    }
}

//middleware is the ideal place to abstract business logic
// leave the logic outside of UIs components
function otherMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            // do stuff
            const nextAction = next(action);

            // read the next state
            const state = getState();

            // return the next action
            return nextAction;
        }
    }
}





export default rootReducer;