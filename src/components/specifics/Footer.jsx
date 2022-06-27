import React from "react";

import clsx from "clsx";

function Footer() {
  return (
    <div
      className={clsx(
        "fixed bottom-0",
        "flex justify-center items-center",
        "w-full bg-gray-100",
        "py-4",
        "text-md",
      )}
    >
      <p>Made with ❤️  by {" "}
        <a
          href="https://github.com/nmassardot"
          className={clsx("font-bold hover:underline")}
        >
          nmassardot
        </a>
      </p>
    </div>
  );
}

export default Footer;
