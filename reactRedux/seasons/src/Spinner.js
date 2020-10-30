import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// provide a default prop outside the original component, which makes it a bit tidier and handles cases where we forget to add props.
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
