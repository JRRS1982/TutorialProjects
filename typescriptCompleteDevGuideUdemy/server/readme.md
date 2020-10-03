body-parser - middleware to parse a form 
cookie-session - cookie to save the user.

by default a request object in Express does not have a body property, which is why we are using body-parser middleware. This brings in complications to Typescript, as typescript has no idea that the body-parser is adding properties to express. Therefore Typescript will not show errors middleware is used / it does not know what is going on in the middleware, we are using type definition files, and they may not be complete or may tell us the wrong type. 

## What i learnt

- Quite good practice on making routes.
- Request object does not have a body, and we need to create one with body-parser middleware. Done in login routes. 
- RequireAuth and next function, to keep protected route protected we need to have auth, 

email = jeremy@code.com
password = password

Created a tonne of decorators to enhance the developer experience.