import { GET_ALL_COUNTRY } from '../actions/types';


export default function globalPlanBasicReducer(state: object = {}, action: any) {
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return {
                ...state,
                countryList: action.payload
            }
        default:
            return state;
    }
}