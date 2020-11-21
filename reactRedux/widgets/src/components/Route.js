import { useEffect, useState } from 'react';

/**
 * window.location.pathname shows the /dropdown etc name of the url on the window, children are the sub element contained in the Route component and this is passed path by the app where the Route component is declared. So if we are in the component where /dropdown is passed in as the path and the window pathname is /dropdown then the children for that Route component will be returned, in this case it makes sense to return the Dropdown component as the child.
 */
const Route = ({ path, children }) => {
  // the only reason for this piece of state is so that we can updated the currentPath
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    /**
     * we in the link component we are dispatching an event called popstate, that is telling us that the url has been updated and we may want to update the component, here we are creating an event listener that is listing for that event... and will update the Route accordingly
     */
    window.addEventListener('popstate', onLocationChange);

    // cleanup function to remove this event listener from the dom if the component is removed
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }; 
  }, []); // only run when first rendered to the screen
  return currentPath === path ? children : null; // return the child of this component if the url pathname matches the prop called path that this component is provided
};

export default Route;
