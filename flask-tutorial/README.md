# FLASKR - a Python project with Flask framework

So this is a RESTful Python/Flask app with CRUD for users that are logged in through the session, otherwise you will have to register as a user first and provide the correct password. Error handling is covered.

I felt like exploring Python and Flask framework as have heard good things, so have followed the official tutorial to create a flask project, the guide can be found [here.](https://flask.palletsprojects.com/en/1.1.x/tutorial)

Partly deployed with Heroku [here](https://nameless-shelf-49036.herokuapp.com/) although please clone and take look at it locally or in the [images](./images) file as sadly I understand that Heroku doesn't support SQLite. Somewhat disappointing as SQLite and Heroku are the recommended resources in the tutorial, but after quite a bit of research i found many other users with a similar issue and I wish to move onto another project. The program works when spun up locally so I am satisfied for now.

### [User Stories](#user_story) | [Tech](#tech) | [Installation](#installation) | [Reflection](#reflection) | [Contact](#contact)

#### Problem: Input / Outputs

Inputs: this is a web app, that takes data from the user/browser in the form of string entered into boxes on a web page or buttons causing events.

Outputs: the entered data is saved to the databases, which populates web page views that has a CRUD system for users that are logged in through the session. 

### <a name="user_story">User Stories</a>

n/a - followed a tutorial.

### <a name="Tech">Tech Stack</a>

* Python 3.7.4
* Flask
* Pytest
* Coverage
* Heroku (a bit)
* see requirements.txt file at root for the detailed list

### <a name="installation">Installation: how it works</a>

Setup virtualenv

```
$ python3 -m venv venv
```

Then activate the virtual environment ("$deactivate" from terminal will close the venv if needed)

```
$ . venv/bin/activate
```

Tell Flask where to find your application

```
$ export FLASK_APP=flaskr
```

Then set environment as development so it is editable

```
$ export FLASK_ENV=development
```

Run the program via the terminal by entering

```
$ flask run
```

Which should launch a simple local server at http://127.0.0.1:5000/

To create a flaskr.sqlite file if missing from the ./instance file, run the
following command to initialize the database.

```
$ flask init-db
```

### Install the project in the virtual environment

Use pip to install the project in the virtual environment. This command tells pip to find setup.py in the current directory and install it in editable or development mode. You can "$ pip list" to check that the project is now installed. The setup.py file describes the project and the files that belong to it.

```
$ pip install -e
```

### Notes

Packages tells Python what package directories (and the Python files they contain) to include. find_packages() finds these directories automatically so you don’t have to type them out. To include other files, such as the static and templates directories, include_package_data is set. Python needs another file named MANIFEST.in to tell it what this other data is.

Further information about packaging of projects can be found [here](https://packaging.python.org/tutorials/packaging-projects/) 

## Testing

Pytest was used for testing the project, although a TDD approach was not followed, as this is a new language for me, in a new framework and i was following a tutorial which wasn't following the process.

Each test will create a new temporary database file and populate some data that will be used
in the tests. The tutorial provided a SQL file that was used to insert that data.

The app fixture will call the factory and pass test_config to configure the application and database for testing instead of using the local development configuration.

To install the project (don't forget the dot!) which allows you to run tests:
```
$ pip install -e .
```

To run the tests, with pytest use the following command from the root (./flask-tutorial).
```
$ pytest
```
To measure the code coverage of the tests, use the coverage command:
```
$ coverage run -m pytest
```
Then open ./htmlcov/index.html in the browser which will produce a coverage report, while in the browser you can navigate around by clicking on files and find those lines that currently lack coverage.

A very detailed HTML report allows you to see which lines were covered in each file... if you really want that:
```
$ coverage html
```

### Heroku

* runtime.txt file created to specify the language
* requirements.txt file created to specify the dependencies.

Using pip to install those dependencies you would run the following command:
```
$ pip install -r requirements.txt
```

To generate that list of requirements for the requirements.txt file, you can rely on pip to gather and create the file:
```
$ pip freeze > requirements.txt
```

### Screenshots / UML / Notes / Diagrams</a>

I have saved a number of screen prints to [images](./images) just to show some of the CRUD routes for quick reference.

### <a name="reflection">Reflection and further development</a>

This project got me up and running and enjoying my code again, so thank you Flask, I owe you one. It is really satisfying to have build a working app (with support) rather than just be working through algorithm in a single language.

Could do a lot of further development, such as swapping out the database to PostgreSQL or deploying to AWS instead of Heroku - but this project was just to get a smell of Python, which I really rather like... may return one day. List of further development suggestions from the guys/girls at flask is [here](https://flask.palletsprojects.com/en/1.1.x/tutorial/next/).

If / when i return to this project my first point of interest would be getting it deployed.

### Credits / team members

No contributions are required at this time, as this is a training exercise.

* This was a solo project
* [A tutorial was used](https://flask.palletsprojects.com/en/1.1.x/tutorial)
