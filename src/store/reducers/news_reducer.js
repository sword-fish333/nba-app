import {GET_NEWS} from '../actions/types';


export default function (state={},action) {
    switch (action.type){
        case GET_NEWS:
            return {
                ...state,articles:action.article
            }

        default:
            return state;
    }
}