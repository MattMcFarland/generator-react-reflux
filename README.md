## React + Reflux for Enterprise.


> This is a work in progress and is not functional... like at all.

### Installation:

```
yo rux
```


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

####

Guides:

https://ochronus.com/react-reflux-example/

http://yeoman.io/authoring/index.html

https://github.com/SBoudrias/ast-query

https://github.com/backbone-boilerplate/generator-bbb/blob/master/lib/generators/app/index.js#L114
