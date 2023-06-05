import axios from "axios";
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constants/constant";


const imageApi = axios.create({
    baseURL: 'https://picsum.photos/',
});

export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await imageApi.get(
            "v2/list?page=2&limit=20"
        );
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload:
                error.data && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};