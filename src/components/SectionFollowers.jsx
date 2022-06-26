import React, { useState, useEffect } from "react";

import clsx from "clsx";

import { getFollowers, getFollowing, getUsersStarredRepo } from "../api/github";
import UsersDisplay from "./specifics/UsersDisplay";

function orderByUsername(follower1, follower2) {
  const follower1UsernameLowerCase = follower1.login.toLowerCase();
  const follower2UsernameLowerCase = follower2.login.toLowerCase();
  return follower1UsernameLowerCase > follower2UsernameLowerCase ? 1 : -1
}

function SectionFollowers({ username }) {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [doesntFollowBack, setDoesntFollowBack] = useState([]);
  const [starredRepo, setStarredRepo] = useState(false);

  useEffect(() => {
    const fetchFollowers = async () => {
      const data = await getFollowers(username);
      data.sort(orderByUsername);
      setFollowers(data);
    };
    fetchFollowers();
  }, [username]);

  useEffect(() => {
    const fetchFollowedBy = async () => {
      const data = await getFollowing(username);
      data.sort(orderByUsername);
      setFollowing(data);
    }
    fetchFollowedBy();
  }, [username]);

  useEffect(() => {
    const followersUsernames = followers.map((f) => f.login);
    const doesntFollow = [];

    following.forEach((f) => {
      if (!(followersUsernames.includes(f.login)) && !(doesntFollow.includes(f))) {
        doesntFollow.push(f);
      }
    });

    const checkStarred = async () => {
      const res = await getUsersStarredRepo();
      const resUsernames = res.map((f) => f.login);
      setStarredRepo(resUsernames.includes(username));
    }

    doesntFollow.sort(orderByUsername);
    setDoesntFollowBack(doesntFollow);
    checkStarred();
  }, [followers, following, username]);

  return (
    <div
      className={clsx(
        "h-full w-full",
        "flex",
        !starredRepo && "flex-col",
        "items-center justify-center",
        "py-10"
      )}
    >
      {starredRepo && (
        <>
          <UsersDisplay users={followers} className={clsx("mr-10")} />
          <UsersDisplay users={following} className={clsx("mr-10")} />
          <UsersDisplay users={doesntFollowBack} />
        </>
      )}
      {!starredRepo && (
        <>
          <h1
            className={clsx("text-3xl font-bold", "mb-5")}
          >
            Remember to star the repository to see whom doesn't follow you back!
          </h1>
          <p className={clsx("text-xl")}>You can give it a star in {" "}
            <a
              className={clsx("text-blue-700 hover:text-blue-500", "underline cursor-pointer")}
              href="https://github.com/nmassardot/doesnt-follow-back"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default SectionFollowers;
