import React from "react";

/**
 * passing the data down from the header to the Link component, again the children is what is contained within the parent class - what is between the <Link></Link> tags
 * 
 * we create an onClick event handler here to manage when a user clicks on the Link option in the header. 
 */
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); // stop a full page reload as we don't need to re-render the whole page when a user clicks between components.
    // window.history.pustState updates the url of the window with the href that we are currently viewing. Without this we are going to be viewing one component, but the url on the page may not be the same as that which we are viewing as we have prevented the default refresh of the page to reduce the events that take place, but some events such as updating the url should still take place.
    window.history.pushState({}, '', href);
    // we will have to emit a navigation event, that will tell our route component that the route has changed, that is what PopStateEvent is doing.
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
