# Chi Lecture Notes
## Day 27: Controller as & Angular routes

### Controller as

`controller as` syntax

**client.js**

```JavaScript
var myApp = angular.module('myApp', []);

myApp.controller('MenuController', [function(){
  // this is whatever controller it is (instance of controller)
  var menu = this;
  menu.grilledCheese = 'Grilled Cheese';
}]);
```

**index.html**

```HTML
<!-- Similar to `var menu = new MenuController()`  -->
<div ng-controller="MenuController as menu">
  {{ menu.grilledCheese }}
</div>
```

### Angular Routing
[`$route`](https://docs.angularjs.org/api/ngRoute/service/$route) is used for deep-linking URLs to controllers and views (HTML partials). It watches `$location.url()` and tries to map the path to an existing route definition.

**Install Angular Routing Module**

1. Install `angular-route`

   `npm install angular-route --save`

2. Update our `Gruntfile.js`

   ```JavaScript
   angularRoute: {
     expand: true,
     cwd: 'node_modules/angular-route/',
     src: ['angular-route.js',
           'angular-route.min.js',
           'angular-route.min.js.map'],
     dest: 'server/public/vendors/angular-route/'
   }
   ```

   > Restart grunt

3. Update your `index.html`

   ```HTML
   <script type="text/javascript" src="vendors/angular/angular.min.js"></script>
   <script type="text/javascript" src="vendors/angular-route/angular-route.min.js"></script>
   <script type="text/javascript" src="scripts/client.min.js"></script>
   ```

4. Update your app in `client.js`

   ```JavaScript
   var myApp = angular.module('myApp', ['ngRoute']);

   myApp.config(['$routeProvider', function($routeProvider){
     $routeProvider
         // First argument, '/home', is the route
         .when('/home', {
           // Object that defines the route configuration
           templateUrl : 'views/templates/home.html'
         })
         .when('/contact', {
           templateUrl : 'views/templates/contact.html'
         })
         // otherwise is optional and *should* be handled on the
         // server instead.
         .otherwise({
           // Where should we go if it doesn't match?
           // Must match a when case without the `/`
           redirectTo: 'home'
         });
   }]);
   ```

5. Add template parts to your project (`home.html` & `contact.html`)

6. Update your `Gruntfile.js` to copy the new HTML files.

   ```JavaScript
   html: {
     expand: true,
     cwd: 'client/views',
     src: ['index.html',
           '**/*.html'],
     dest: 'server/public/views/'
   }
   ```

   > Restart grunt

7. Add the route attribute to your `index.html`

   ```HTML
   <body>
     <!-- This is replaced with our route content HTML -->
     <main ng-view></main>
   </body>
   ```

8. Our Angular routing should now be working. Let's add a `nav.html` partial

   ```HTML
   <ul>
     <li><a href="#!/home">HOME</a></li>
     <li><a href="#!/contact">CONTACT</a></li>
   </ul>
   ```

9. Include the partial in the `index.html`

   ```HTML
   <body>
     <!-- NAV -->
     <div ng-include="'views/partials/nav.html'"></div>

     <!-- CONTENT -->
     <main ng-view></main>
   </body>
   ```

10. Add controllers (`HomeController.js`, `ContactController.js`), update grunt & update our `client.js`

   ```JavaScript
   var myApp = angular.module('myApp', ['ngRoute']);

   myApp.config(['$routeProvider', function($routeProvider){
     $routeProvider
         // First argument, '/home', is the route
         .when('/home', {
           templateUrl : 'views/templates/home.html',
           controller : 'HomeController',
           // Allows us to use controller as syntax
           controllerAs : 'home'
         })
         .when('/contact', {
           templateUrl : 'views/templates/contact.html',
           controller : 'ContactController',
           controllerAs : 'contact'
         });
   }]);
   ```

**Done!**

Final repo available [here](https://github.com/scottbromander/chi_angular_routes).