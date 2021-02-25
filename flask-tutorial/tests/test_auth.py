import pytest
from flask import g, session
from flaskr.db import get_db

def test_register(client, app):
    # test that viewing the page renders without template errors
    # client.get() makes a GET request and returns the Response object, returned by flask.
    # to test that the page reders cuccessfully a simple request is made and checked for a 200 OK status_code, if it is unsuccessful there would be a 500 Internal Server Error code.
    assert client.get('/auth/register').status_code == 200

    # test that successful registration redirects to the login page
    response = client.post(
        '/auth/register', data={'username': 'a', 'password': 'a'})
    assert 'http://localhost/auth/login' == response.headers['Location']

    # test that the user was inserted into the database
    with app.app_context():
        assert (
            get_db().execute("select * from user where username = 'a'").fetchone()
            is not None
        )

#pytest.mark.parametrize tells Pytest to run the same test fucntions with different arguments. You use it here to test difference invalid input and error messages without writing the same code three times. i..e username, passwors and message are being checked here - i think.
@pytest.mark.parametrize(
    ("username", "password", "message"),
    (
        ("", "", b"Username is required."),
        ("a", "", b"Password is required."),
        ("test", "test", b"already registered"),
    ),
)
def test_register_validate_input(client, username, password, message):
    # similar to the GET requesat above client.post() makes a POST request converting the data dict into form data.
    response = client.post(
        "/auth/register", 
        data={"username": username, "password": password}
    )
    assert message in response.data


def test_login(client, auth):
    # test that viewing the page renders without template errors
    assert client.get("/auth/login").status_code == 200

    # test that successful login redirects to the index page
    response = auth.login()
    assert response.headers["Location"] == "http://localhost/"

    # login request set the user_id in the session
    # check that the user is loaded from the session
    # using client in a WITH block allows accessing context variables such as session after the response is returned. Normally accessing session outside of a request would raise an error.
    with client:
        client.get('/')
        assert session['user_id'] == 1
        assert g.user['username'] == 'test'

@pytest.mark.parametrize(
    ('username', 'password', 'message'),
    (('a', 'test', b'Incorrect username.'),
    ('test', 'a', b'Incorrect password.')
))

def test_login_validate_input(auth, username, password, message):
    response = auth.login(username, password)
    assert message in response.data


# testing logout is clearly the opposite of login, the session should not contain user_id after logging out as it is cleared during that process.
def test_logout(client, auth):
    auth.login()

    with client:
        auth.logout()
        assert 'user_id' not in session
