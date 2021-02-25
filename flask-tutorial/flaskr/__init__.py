import os

from flask import Flask

# create app is the application factory function
def create_app(test_config=None):
  # create and configure the app... creates an instance of Flask
  # __name__ is the name of the current python module. 
  # intance_relative_config=True tells us that configuretion file are relative
  app = Flask(__name__, instance_relative_config=True)
  # app.config.from_mapping sets some defaults
  app.config.from_mapping(
    #SECRET_KEY is used by flask to keep data safe, in this instance we are 
    # setting its value as dev, but that should be changed when it goes public,
    # in this instance i dont care as its just practice.
    SECRET_KEY='dev',
    # DATABASE is the parth where the SQLite database file will be saved, this
    # is currently under app.instance_path
    DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
  )

  if test_config is None:
    # load the instance config, if it exists, when not testing. 
    # overrides the default configuration with values taken from the config.py 
    # file in the instance folder if it exists. For example, when deploying, 
      #this can be used to set a real SECRET_KEY.
    app.config.from_pyfile('config.py', silent=True)
  else: 
    # load the test config if passed in
    app.config.from_mapping(test_config)

  # ensure the instance folder exists
  try: 
    os.makedirs(app.instance_path)
  except OSError:
    pass

  # a simple page that says hello
  @app.route('/hello')

  def hello():
    return 'Hello, World'

  # import the db file into the init 
  from . import db
  # call the init_app on the db. 
  db.init_app(app)

  # so import the auth.py file from the root and run register_blueprint on app, with auth.bp as an argument being passed to it.
  from . import auth
  app.register_blueprint(auth.bp)

  from . import blog
  app.register_blueprint(blog.bp)
  app.add_url_rule('/', endpoint='index')

  return app
