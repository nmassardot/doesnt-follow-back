import React, { useState, useEffect } from "react";

import { getFollowers } from "../api/github";

import FollowersDisplay from "./specifics/FollowersDisplay";

function SectionFollowers({ username }) {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowers(username);
      setFollowers(data);
    };
    fetchFollowers();
  }, [username]);
  return (
    <div>
      <FollowersDisplay followers={followers} />
    </div>
  );
}

export default SectionFollowers;
