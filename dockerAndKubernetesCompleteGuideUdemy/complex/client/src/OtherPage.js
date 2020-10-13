import React from "react";
import { Link } from "react-router-dom";

/**
 * This is just some other page that we can navigate to.
 */
export default () => {
  return (
    <div>
      Im some other page!<Link to="/">Go back home</Link>
    </div>
  );
};
