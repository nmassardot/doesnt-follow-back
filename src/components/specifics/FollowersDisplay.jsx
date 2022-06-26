import React from "react";

function FollowersDisplay({ followers }) {
  return (
    <>
      {followers.map((follower) => <h1>{follower.login}</h1>)}
    </>
  );
}

export default FollowersDisplay;
