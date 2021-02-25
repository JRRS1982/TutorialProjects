from setuptools import find_packages, setup

# packages tells Python what package directories (and the Python files they contain) to include

# find_packages() finds these directories automatically so you dont have to type them out. 

# Python needs another file names MANIFEST.in to tell what other data is. 
setup(
  name='flaskr',
  version='1.0.0',
  packages=find_packages(),
  include_package_data=True,
  zip_safe=False,
  install_requires=[
    'flask',
  ],
)