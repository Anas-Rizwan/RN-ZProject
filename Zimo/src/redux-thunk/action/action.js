import axios from "axios";
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constants/constant";


const imageApi = axios.create({
    baseURL: 'https://zimopro.co.uk/api/zimo-app/',
});

export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await imageApi.get(
            "listings?key=786ZM786&lat=37&lng=91&category=car&type=ENDINGSOON&country_id=174"
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