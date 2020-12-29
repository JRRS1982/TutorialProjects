import React from "react";
import ReactDOM from "react-dom";

/**
 * Semantic UI has three types of classes for Modals... headers, content and actions for styling the seperate parts
 */

const Modal = (props) => {
  /**
   * createPortal has two params, we are not placing the new modal directly on the body html element, but create a new div in the body which the modal will attach to. Have done this in the index.html file (new div with id of modal)
   *
   * So when streamDelete is rendered, within it Modal is rendered, and when this is called, the createPortal function will attach the first param to the second param.
   */
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      {/* stopPropigation below is stopping any click event from bubbling up to the higher level onClick event handler just above this, i.e. if you click outside the modal you redirect to / path, but if click inside you will not */}
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}> 
        <i className="close icon" onClick={props.onDismiss}></i>
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal") // render this new modal on the root div in index.html which has an id of modal
  );
};

export default Modal;
