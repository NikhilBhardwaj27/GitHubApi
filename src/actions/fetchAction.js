import store from "../store";

export const fetchPosts = () => {
  return {
    type: "FETCH_USERS"
  };
};

export const receivePosts = data => {
  return {
    type: "FETCHED_USERS",
    data
  };
};

export const receiveError = () => {
  return {
    type: "FETCH_ERROR"
  };
};

export const thunk_action_creator = username => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetchPosts());

  return function(dispatch, getState) {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.message === "Not Found") {
          console.log("Not found");
          throw new Error("No Such User is found");
        } else {
          store.dispatch(receivePosts(data));
        }
      })
      .catch(err => store.dispatch(receiveError()));
  };
};
