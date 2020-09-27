import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

interface RequestWithBody extends Request { // the type definition file has an "any" type for Request, to improve on that we are setting the type to ensure typescript understands what is required.
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void { // next = next middleware that we want to call - from Router
  if (req.session && req.session.loggedIn) {
    next(); // move onto next handler
    return;
  }
  
  res.status(403);
  res.send('Not Permitted');
  
}
router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email<label>
        <input name="email"/>
      </div>
      <div>
        <label>Password<label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => { // express types library imported to set type of the Request and Response.
  const { email, password } = req.body // .body available as we are somehow using body-parser to parse the request.
  
  if (email && password && email === 'hi@hi.com' && password === 'password') { // HARD CODE USER/PASS
    req.session = { loggedIn: true }; // setting an attribute on the session.
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route, you are a logged in user');
})

export { router };
