import { repositoriesActionTypes } from ".";
import { SELECT_VAL } from "../../constants";

const initialState = {
    repositories: [],
    q: '',
    page: 1,
    sortBy: SELECT_VAL.nothing,
}

export const repositoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case repositoriesActionTypes.SET_REPOSITORIES:
            return { ...state, repositories: action.payload };
        case repositoriesActionTypes.SET_Q:
            return { ...state, q: action.payload };
        case repositoriesActionTypes.SET_PAGE: 
            return { ...state, page: action.payload};
        case repositoriesActionTypes.SET_SORT: 
            return { ...state, sortBy: action.payload};
        default:
            return state;
    }
}