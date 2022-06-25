import React, { useEffect } from "react";

import { getFollowers } from "../api/github";

function SectionFollowers({ username }) {
  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowers(username);
      console.log(data);
    };
    fetchFollowers();
  }, [username]);
  return (<h1>Followers section</h1>);
}

export default SectionFollowers;
