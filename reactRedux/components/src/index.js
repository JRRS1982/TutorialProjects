import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.avatar()}
          timeAgo="Today"
          bodyText="This is some text"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avatar={faker.image.avatar()}
          timeAgo="Yesterday"
          bodyText="This is some more text"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          avatar={faker.image.avatar()}
          timeAgo="Last week"
          bodyText="This is even more text"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
