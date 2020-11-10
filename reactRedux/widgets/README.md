# PROJECT NAME HERE XXXXXX 

### [User Stories](#user_story) | [Tech](#tech) | [Reflection](#reflection) | [Contact](#contact)

This is the [Stephen Griders React-Redux](https://www.udemy.com/course/react-redux) course, chapter 12.

Accordion Component 

#### Problem: Input / Output

Inputs: search term from the user

Outputs: wikipedia search result displayed in a dropdown


### <a name="Tech">Tech Stack</a>

* Javascript
* React
* React-router
* Wikipedia API
* Google Translate API

##### Code style

* 

##### API's Used

* Wikipedia API
    * https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=EXAMPLESEARCHTERM
* Google Translate API

### <a name="installation">Installation: how it works</a>

```

```

clone the repo
> $ git clone XXXXXX
bundle install to install the gems and get started
> $ bundle install
run tests from the root of the project
> $ rspec
enter irb (or pry if you prefer)
> $ irb
create an instance of the object under construction and use as you desire.
> $ XXXX = YYYYY.new

### <a name="screenshots"> UML / Screenshots / Documentation</a>

Should there be any UML / screenshots / documentation for the project, please find them in the 'images' folder of the 
project.

Sandi Metz ch9 p203 suggests this table to clarify what needds to be tested... test public interfaces of objects, not attributes.
| Object | Incoming Messages | Outgoing Messages | Has dependents?
|:---:|:---:|:---:|:---:|
| Wheel | diameter- method on wheel | None - everything is in wheel | Yes - needs rim and tyre from wheel
| Gear | None - there is no request to Gear, the request is to Wheel | diameter method is on wheel, and request is therefore outgoing | No - rim and tyre is from Wheel.  
 

### <a name="reflection">Reflection and further development</a>

What went well?
What would i do differently?

### Credits / team members

No contributions are required at this time, as this is a training exercise from Stephen Griders React-Redux course.
