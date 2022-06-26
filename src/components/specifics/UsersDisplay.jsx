import React from "react";

import clsx from "clsx";

function UserCard({ user }) {
  return (
    <div
      className={clsx(
        "grid grid-cols-3",
        "w-full",
        "my-2",
        "pl-3",
      )}
    >
      <a
      className={clsx(
        "col-start-1 col-span-2",
        "hover:font-bold",
        "hover:underline"
      )}
      href={`https://github.com/${user.login}`}
      >
        {user.login}
      </a>
      <img
        className={clsx("col-start-3 mx-auto", "h-10 w-10")}
        src={user.avatar_url}
        alt={`${user.login} profile`}
      />
    </div>
  );
}

function UsersDisplay({ users, className }) {
  return (
    <div className={clsx("w-1/5 h-96 overflow-y-scroll", "rounded-xl bg-gray-300", className)}>
      {users.map((user) => <UserCard user={user} />)}
    </div>
  );
}

export default UsersDisplay;
