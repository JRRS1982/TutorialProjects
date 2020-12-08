# Title: Complex

Probably my favourite project to date.

A way more complicated than it needs to be Fibonacci calculator. Using multiple container images and a CI / CD workflow that is bloomin complicated! AWS Elastic Beanstalk, AWS Relational Database, AWS Elastic Cache all in use and being deployed only on merge of master branch.

See my notes on this course in [docs/notes](./docs/notes.md) that is where i have most of the material about the project itself. 

## The CI / CD workflow created

1. Push code to github
2. Travis auto pulls repo
3. Travis builds a TEST image and tests the code
4. Travis builds PRD images
5. Travis pushes built PRD images to Docker Hub
6. Travis pushes project to AWS Elastic Beanstalk
7. Elastic Beanstalk pulls images from Docker Hub and deploys.

## Table of contents
* [Setup](#setup)
* [Technology and patterns used](#tech)
* [Tests and style](#tests)
* [Screenshots](#screenshots)
* [Reflection, credits and ideas](#reflection)

<div id='setup'>

## Setup

Environment variables are going to be needed in Travis and AWS.

<div id='tech'>

## Technology used

This project was created with:

* API's
* Frameworks
    - Express Server
* Libraries
    - React
    - React Server
    - Redis
    - Nginx
* CI / CD?
    - Travis CI
    - AWS Elastic Beanstalk Instance CD
* Linting / style guide
* Postgres
* AWS Elastic Cache
* AWS Relational Database Service
* Docker
    - Dockerrun.aws.json

### Coding pattterns used

No particular pattern was used in this project.

<div id='tests'>

## Tests and style guide

No tests or styleguide was used in this project.

<div id='screenshots'>

## Screenshots 

Currently there are no screenshots, but if it get to it, they will be saved in `docs/images`

<div id='reflection'>

## Reflection and ideas for future development

The project is complete and this is as far as I have got with this course, I currently need no more knowledge of Docker for my work (but i still need a lot of practice using it!). The knowledge in this project particularly was awesome, I long for more hours in the day to get through some more of this.

#### What did i learn?

- A shit tonne about AWS, a tonne about Travis, a metric shit tonne about Docker and more than I am going to be summarise / remember.

#### What would i do differently?

- Write better notes, I am definetly going to be referring back to this project in the future. 
- I am going to do this project again at somepoint.

#### Credits
- [Stephen Grider: Docker and Kubernetes Udemy Course](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/)
