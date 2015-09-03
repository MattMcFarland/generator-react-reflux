## React + Reflux for Enterprise.


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

Create a view - Contains the main content of the page.

```
yo rux:view <name>
```

Create a layout - Contains views and partials, may also contain some state logic.

```
yo rux:view <name>
```

Create a new suite - Containing an actions file and store file of the same namespace, they will both be wired up to work with each other.

```
yo rux:newsuite foo

--> fooActions.js
--> fooStore.js
```

Add a new action to a suite - adds the necessary code to add an action to an existing store and an existing actions file.

```
yo rux:suiteadd foo getItems
--> fooActions.js contains code 'getItems'
--> fooStore.js contains listeners and code for 'getItems'
```

Injects code into **any** component and subscribe to a store for the purposes of updating the components state when store changes.

```
yo rux:listen myComponent getItems
--> myComponent.js now has mixins: [Reflux.connect(...)],
```

Creates an action and injects it into store

```
yo rux:addaction <actionsfile> <actionname> <storefile>
```

Create a new actions file with the given name

```
yo rux:newactions <name>
```

Create a new store file with the given name

```
yo rux:newstore <name>
```

Creates boilerplate for a webapi

```
yo rux:webapi <uri> <name>
--> GET uri, PUT uri, POST uri, PATCH uri, DELETE uri
```