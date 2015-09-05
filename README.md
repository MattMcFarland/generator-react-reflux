## An Intelligent Scaffolding tool using Yeoman, Browserify, React, and Reflux for Enterprise Application.

Here's a scaffolding tool that will wire up your routers, stores, actions and components.

### What's inside?

- gulp
- bower
- browserify
- reactify
- lessify
- jest
- reactjs
- reflux
- react-router


### Installation:

Get yeoman - http://yeoman.io
```
npm install yo -g
```
If you have yeoman, get rux.
```
npm install generator-rux
```

### Scaffolding Base App
```
cd my-new-project
yo rux
```

Don't want bloat?  No problem, you can choose to install the sample app or not.

#### Scaffolding Components

Create an element - Something that shouldn't have nested children and inherits all of its props.  think icons, thumbnails, special elements, etc.

##### yo rux:add <type> <name>

parameters:

|name|type|description|
|type|string|"element", "partial", "view", or "layout"|
|name|string|Name of the component
```
yo rux:add <type> <name>
```


#### References

Guides:

https://ochronus.com/react-reflux-example/

http://yeoman.io/authoring/index.html

https://github.com/SBoudrias/ast-query

https://github.com/backbone-boilerplate/generator-bbb/blob/master/lib/generators/app/index.js#L114

#### Acknowledgements

While this has been heavily refactored to the point of almost being completely re-written, it wouldn't be possible without
the careful examination of generator-react-reflux by Tilen Faganel
