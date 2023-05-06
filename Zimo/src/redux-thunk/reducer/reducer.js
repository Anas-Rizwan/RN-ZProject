import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constants/constant";


intialState = {
    item: []
}
export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return { isLoading: true, item: [] };

        case GET_USERS_SUCCESS:
            return { isLoading: false, item: action.payload };

        case GET_USERS_FAIL:
            return { isLoading: false, IsError: action.payload };

        default:
            return state;
    }
};