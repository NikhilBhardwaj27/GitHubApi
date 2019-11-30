import "./styles.css";
import React from "react";
import { connect } from "react-redux";
import { thunk_action_creator } from "./actions/fetchAction";
import UsersInfo from "./usersInfo";

function App(props) {
  const handleInput = e => {
    e.preventDefault();
    let user = e.target.inp.value;
    props.dispatch(thunk_action_creator(user));
  };

  return (
    <div className="App">
      <form onSubmit={handleInput} className="form">
        <input
          className="inputField"
          type="text"
          placeholder="Enter Name here: "
          name="inp"
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>

      {props.isFetching ? <h2>Loading...</h2> : null}
      {props.isError ? <h2 className="error">No Such Users Exists..</h2> : null}
      {Object.keys(props.userData).length > 0 ? (
        <UsersInfo users={props.userData} />
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
