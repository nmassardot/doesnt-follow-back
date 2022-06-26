import React, { useState, useEffect } from "react";

import clsx from "clsx";

import { getFollowers, getFollowing } from "../api/github";
import UsersDisplay from "./specifics/UsersDisplay";

function SectionFollowers({ username }) {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowers(username);
      setFollowers(data);
    };
    fetchFollowers();
  }, [username]);

  useEffect(() => {
    const fetchFollowedBy = async () => {
      const data = await getFollowing(username);
      setFollowing(data);
    }
    fetchFollowedBy();
  }, [username])
  return (
    <div className={clsx("h-full w-full", "flex items-center justify-center", "py-10")}>
      <UsersDisplay users={followers} className={clsx("mr-10")} />
      <UsersDisplay users={following} />
    </div>
  );
}

export default SectionFollowers;
