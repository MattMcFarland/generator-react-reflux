### Elements.

Elements are shared components that contain very little complexity, and are like a mix between an "atom" and a "molecule" in the atomic design pattern.  

Because of their simplicity:

* They are easily used just about anywhere in an application without needing a refactor.
* They generally don't contain child components, as the extra layer of complexity lends itself to being a partial.
* They do not communicate with stores. and only contain properties.

### Elements are shared

IF you have elements that are only used on specific views, it is better to keep them in that views' folder.
