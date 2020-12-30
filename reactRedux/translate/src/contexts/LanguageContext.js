import React from "react";

/**
 * The context object is the inbetween element that is passed between parent and nested child component.
 *
 * a Context object is kind of like an interface, it has either a default value or is passed a data value from its parent, which is given to the nested child `Consumer` or is the nested childs this.context value.
 *
 * it creates a `context` for any component that it is imported into and used (see Button component), the default value of that is whatever is passed into the createContext function here.
 */
export default React.createContext("english"); // default value of LanguageContext context


