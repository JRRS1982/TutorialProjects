# A view function is the code you write to respond to requests to your application. Flask uses patterns to match the incoming request URL to the view that should handle it. The view returns data that Flask turns into an outgoing response. Flask can also go the other direction and generate a URL to a view based on its name and arguments
# A Blueprint is a way to organize a group of related views and other code. Rather than registering views and other code directly with an application, they are registered with a blueprint. Then the blueprint is registered with the application when it is available in the factory function.
# Flaskr will have two blueprints, one for authentication functions and one for the blog posts functions. The code for each blueprint will go in a separate module. Since the blog needs to know about authentication, you’ll write the authentication one first.

import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from werkzeug.security import check_password_hash, generate_password_hash

from flaskr.db import get_db
# This creates a blueprint named 'auth', like the application object the blueprint needs to know where its defined, so __name__ is passed as a second argument. The url_prefix will be prepended to all the URLs associated with the blueprint. This blueprint will be imported and regisered in the factory function i.e. __init__.py file before returning the app.

bp = Blueprint('auth', __name__, url_prefix='/auth')
# @bp.route associates the URL / register with the register view function. When Flask receives a request to / auth/register, it will call the register view and use the return value as the response.


@bp.route('/register', methods=('GET', 'POST'))
def register():
    # Register a new user. Validates that the username is not already taken. Hashes the password for security.
    # If the user submitted the form, request.method will be 'POST'. In this case, start validating the input.
    if request.method == 'POST':
        # request.form is a special type of dict mapping submitted form keys and values. The user will input their username and password.
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None

        # Validate that username and password are not empty.
        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        # Validate that username is not already registered by querying the database and checking if a result is returned. db.execute takes a SQL query with ? placeholders for any user input, and a tuple of values to replace the placeholders with. The database library will take care of escaping the values so you are not vulnerable to a SQL injection attack.fetchone() returns one row from the query. If the query returned no results, it returns None. Later, fetchall() is used, which returns a list of all results.
        elif (
            db.execute('SELECT id FROM user WHERE username = ?', (username)
                      ).fetchone() is not None
            ):
            error = 'User {0} is already registered.'.format(username)

        if error is None:
# If validation succeeds, insert the new user data into the database. For security, passwords should never be stored in the database directly. Instead, generate_password_hash() is used to securely hash the password, and that hash is stored. Since this query modifies data, db.commit() needs to be called afterwards to save the changes.
# the name is available, store it in the database and go to the login page
            db.execute(
                'INSERT INTO user (username, password) VALUES (?, ?)',
                (username, generate_password_hash(password)),
            )
            db.commit()
# After storing the user, they are redirected to the login page. url_for() generates the URL for the login view based on its name. This is preferable to writing the URL directly as it allows you to change the URL later without changing all code that links to it. redirect() generates a redirect response to the generated URL.
            return redirect(url_for('auth.login'))
# If validation fails, the error is shown to the user. flash() stores messages that can be retrieved when rendering the template.
        flash(error)
# When the user initially navigates to auth/register, or there was a validation error, an HTML page with the registration form should be shown. render_template() will render a template.
    return render_template('auth/register.html')

@bp.route('/login', methods=('GET', 'POST'))
def login():
# Log in a registered user by adding the user id to the session.
# There are a few differnces with the register view
# 1) The user is queried first and stored in a variable for later use.
# 2) check_password_hash() hashes the submitted password in the same way as the stored hash and securely compares them. If they match, the password is valid. check_password_hash was imported earlier.
# 3) session is a dict that stores data across requests. When validation succeeds, the user’s id is stored in a new session. The data is stored in a cookie that is sent to the browser, and the browser then sends it back with subsequent requests. Flask securely signs the data so that it can’t be tampered with.
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None
        user = db.execute(
            'SELECT * FROM user WHERE username = ?', (username,)
        ).fetchone()

        if user is None:
            error = 'Incorrect username.'
        elif not check_password_hash(user['password'], password):
            error = 'Incorrect password.'

        if error is None:
# store the user id in a new session and return to the index
            session.clear()
            # Below we save the user’s id in the session, it will therefore be available on subsequent requests. At the beginning of each request, if a user is logged in their information should be loaded and made available to other views.
            session['user_id'] = user['id']
            return redirect(url_for('index'))

        flash(error)

    return render_template('auth/login.html')

# quite self explanatory, the logout route clears the session and redirects.
@bp.route('/logout')
def logout():
# Clear the current session, including the stored user id.
    session.clear()
    return redirect(url_for("index"))


bp = Blueprint("auth", __name__, url_prefix="/auth")


def login_required(view):
# View decorator that redirects anonymous users to the login page.

    @functools.wraps(view)
    def wrapped_view(**kwargs):
        if g.user is None:
            return redirect(url_for("auth.login"))

        return view(**kwargs)

    return wrapped_view

# bp.before_app_request() registers a function that runs before the view function, no matter what URL is requested. load_logged_in_user checks if a user id is stored in the session and gets that user’s data from the database, storing it on g.user, which lasts for the length of the request. If there is no user id, or if the id doesn’t exist, g.user will be None.
# I believe that this is a core method that comes as part of Flask
@bp.before_app_request
def load_logged_in_user():
    """If a user id is stored in the session, load the user object from
    the database into ``g.user``."""
    user_id = session.get("user_id")

    if user_id is None:
        g.user = None
    else:
        g.user = (
            get_db().execute("SELECT * FROM user WHERE id = ?", (user_id,)).fetchone()
        )


@bp.route("/register", methods=("GET", "POST"))
def register():
    """Register a new user.
    Validates that the username is not already taken. Hashes the
    password for security.
    """
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        db = get_db()
        error = None

        if not username:
            error = "Username is required."
        elif not password:
            error = "Password is required."
        elif (
            db.execute("SELECT id FROM user WHERE username = ?",
                       (username,)).fetchone()
            is not None
        ):
            error = "User {0} is already registered.".format(username)

        if error is None:
            # the name is available, store it in the database and go to
            # the login page
            db.execute(
                "INSERT INTO user (username, password) VALUES (?, ?)",
                (username, generate_password_hash(password)),
            )
            db.commit()
            return redirect(url_for("auth.login"))

        flash(error)

    return render_template("auth/register.html")


@bp.route("/login", methods=("GET", "POST"))
def login():
    """Log in a registered user by adding the user id to the session."""
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        db = get_db()
        error = None
        user = db.execute(
            "SELECT * FROM user WHERE username = ?", (username,)
        ).fetchone()

        if user is None:
            error = "Incorrect username."
        elif not check_password_hash(user["password"], password):
            error = "Incorrect password."

        if error is None:
            # store the user id in a new session and return to the index
            session.clear()
            session["user_id"] = user["id"]
            return redirect(url_for("index"))

        flash(error)

    return render_template("auth/login.html")


@bp.route("/logout")
def logout():
# Clear the current session, including the stored user id.
    session.clear()
    return redirect(url_for("index"))
