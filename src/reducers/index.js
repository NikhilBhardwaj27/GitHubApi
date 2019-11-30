const initialState = {
  userData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return Object.assign({}, state, {
        userData: {},
        isFetching: true,
        isError: false
      });

    case "FETCHED_USERS":
      return Object.assign({}, state, {
        userData: action.data,
        isFetching: false,
        isError: false
      });

    case "FETCH_ERROR":
      return Object.assign({}, state, {
        userData: {},
        isFetching: false,
        isError: true
      });

    default:
      return state;
  }
};

export default asyncReducer;
