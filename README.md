## An Intelligent Scaffolding tool using Yeoman, Browserify, React, and Reflux for Enterprise Application.

Here's a scaffolding tool that will wire up your routers, stores, actions and components. 

### What's inside?

gulp
bower
browserify
reactify
lessify
jest
reactjs
reflux
react-router


### Installation:

Get yeoman - http://yeoman.io
``` 
npm install yo -g
```
If you have yeoman, get rux.
```
npm install generator-rux
```

### Scaffolding the Base
```
cd my-new-project
yo rux
```

Don't want bloat?  No problem, you can choose to install the sample app or not.

#### Scaffolding Components

Create an element - Something that shouldn't have nested children and inherits all of its props.  think icons, thumbnails, special elements, etc.

```
yo rux:element <name>
```

Create a partial - Something that may contain elements or may be simple, but has nested children, think navigation bars, headers, footers, etc.

```
yo rux:partial <name>
```

Create a view and adds it to your router - Contains the main content of the page.

```
yo rux:view <name>
```

Create a layout and adds it to your router - Contains views and partials, may also contain some state logic.

```
yo rux:layout <name>
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
