import { combineReducers } from "redux";
import { repositoriesReducer as repositories} from "./repositories"; 

export const reducer = combineReducers({
    repositories,
});