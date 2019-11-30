import React from "react";
import "./styles.css";

function usersInfo(props) {
  return (
    <div className="container">
      {console.log(props.users)}

      <img className="image" src={props.users.avatar_url} alt="avatar" />

      <div className="content">
        <p className="name">{props.users.name}</p>

        <strong>BIO :</strong>
        {props.users.bio}

        <strong> Followers : {props.users.followers}</strong>

        <strong>Following : {props.users.following}</strong>

        <a href={props.users.html_url}>Git Hub Link</a>
      </div>
    </div>
  );
}

export default usersInfo;
