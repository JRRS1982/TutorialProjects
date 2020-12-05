# Lodash - a Javascript helper library, to make working with Javascript easier

[Lodash](https://lodash.com/) is a library that makes writing Javascript functions a little bit easier, [docs](https://lodash.com/docs/4.17.15)


### _.memoize()

Can only call the function one time, i.e. it is not going to make subsequent calls, the return from the original invocation is going to be returned in subsequent invocations.

See blog/src/actions/index.js for an example.

```
getUser(id) {
  doSomething();
  return fetchFromSomewhere(id);
}
memoizedGetUser = _.memoize(getUser);

memoizedGetUser(A);
-> UserA

Now memoize kind of caches the response, the UserA that is RETURNED first time, will be returned subsequent times, event if UserA changes to something else. If there are functions within such as doSomething, that will not be run, only what is returned.

UserA = UserB;

memoizedGetUser(A);
-> UserA
```

memoize helps reduce the number of calls that you make, if you have already had a response for a request before, you can use this to reduce i.e. api calls.

### _.uniq()

function to select only unique object from an array.

### _.map() 

loop over and element and return an array

