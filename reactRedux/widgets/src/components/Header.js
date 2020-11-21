import React from "react";
import Link from "./Link";
/**
 * The navigation bar for the top of the application. 
 * 
 * We could pass in the components directly, but by doing that we are not really using React as it is designed, using those component directly would cause many events to take place due to their rendering for this
 */
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
    );
};

export default Header;