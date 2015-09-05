/**
 * Router
 * @see https://github.com/rackt/react-router
 */

// Dependencies
var React = require('react'),
  Router = require('react-router');

// Router
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


/* yo rux:layout */
// [$Layouts] <-- Do not remove this line to keep generator working
var Basic = require('../components/layouts/basic');

// Use yo rux:layout to add layouts

/* ----------------------- */

/* yo rux:view */
// [$Views] <-- Do not remove this line to keep generator working
var Home = require('../components/views/home');

// Use yo rux:view to add views

/* ----------------------- */


// Route Hash
// Use yo rux:view and routes will be created for you.
var routes = (
	<Route name="Basic" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />

	</Route>
);

// Route Start
exports.start = function() {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
  });
};

