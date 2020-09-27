import { Router, Request, Response } from 'express';

const router = Router();

interface RequestWithBody extends Request { // the type definition file has an "any" type for Request, to improve on that we are setting the type to ensure typescript understands what is required.
  body: { [key: string]: string | undefined }
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
    // mark this person as logged in
    req.session = { loggedIn: true }; 
    // redirect to root route
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

export { router };
