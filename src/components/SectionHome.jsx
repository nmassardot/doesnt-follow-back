import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import Footer from "./specifics/Footer";

function SectionHome() {
  const [githubUsername, setGithubUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div
    className={clsx(
      "w-full h-full",
      "flex flex-col-reverse md:flex-row",
      "items-center justify-center",
      "py-8 md:py-20",
      "px-5 md:px-20",
    )}
    >
      <p className={clsx("w-1/2")}>Pic</p>
      <div
        className={clsx(
          "w-full md:w-1/2",
          "flex flex-col",
          "justify-center items-center",
          "text-xl text-justify",
          "md:py-24",
        )}
      >
        <h1
          className={clsx(
            "text-4xl font-bold",
            "mb-8",
          )}
          >
            Who doesn't follow you back?
          </h1>
          <p className={clsx("mb-12")}>
            There are people that you follow that just don't
            want to follow you back on Github. Here you have de oportunity to
            know whom they are, and if it's still woth it to follow them.
          </p>
          <div className={clsx("flex items-center justify-center", "w-full", "md:px-10", "mb-12")}>
            <input
              type="text"
              placeholder="Enter your Github username"
              onChange={(e) => setGithubUsername(e.target.value)}
              className={clsx(
                "w-5/6 md:w-1/2",
                "rounded-lg border border-black",
                "py-2 px-2",
                "mr-5",
              )}
            />
            <button
            onClick={() => navigate(githubUsername)}
              className={clsx(
                "bg-blue-500 hover:bg-blue-400",
                "px-7 py-2",
                "rounded-lg",
              )}
            >
              Go!
            </button>
          </div>
          <p>
            In the best case, you can tell them to follow you back, and,
            if they do, no hard feelings and all it's ok
          </p>
      </div>
      <Footer />
    </div>
  );
}

export default SectionHome;
