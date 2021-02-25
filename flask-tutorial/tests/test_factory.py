# the only behaviour that can change is passing test config, if config is not passed there should be some default configuration otherwise the configuration should be overridden. 

#  we added a hello route when setting up the project and writing the factory at the start, it returns hello world so the test checks that the response data matches. 

from flaskr import create_app

def test_config():
    assert not create_app().testing
    assert create_app({'TESTING': True}).testing

def test_hello(client):
    response = client.get('/hello')
    assert response.data == b'Hello, World'