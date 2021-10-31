import axios from "axios";

const GET_USERS = "GET-USERS";

let initialState = {
	usersData: [],
	initialLoading: true,
};

const usersReducer = (state = initialState, action) => {
	let stateCopy = { ...state, usersData: [...state.usersData] };

	switch (action.type) {
		case GET_USERS:
			stateCopy.usersData = action.payload;
			stateCopy.initialLoading = action.initialLoading;

			return stateCopy;

		default:
			return stateCopy;
	}
};

const getUsersAC = (payload, loading) => {
	return {
		type: GET_USERS,
		payload: payload,
		initialLoading: loading,
	};
};

export const getUsersData = () => {
	return dispatch => {
		axios.get("https://randomuser.me/api/?results=5").then(response => {
			dispatch(getUsersAC(response.data.results, false));
		});
	};
};

export default usersReducer;
