import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      {/* CommentDetails is passed as a prop and therefore it will be output as a child ... i.e. props.children */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
