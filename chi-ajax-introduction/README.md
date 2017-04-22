# AJAX Introduction
If you fork this repo, you can skip the setup and folder structure. Just run `npm install`.
## Setup Node
- `$ mkdir chi_day_8`
- `$ cd chi_day_8`
- `$ npm init`
- `$ npm install express --save`
- `$ npm install jquery --save`
- `$ npm install body-parser --save`

## Add Folder Structure
```
chi_day_8/
├── server/
│   ├── public/
│   │   ├── scripts/
│   │   │   └── client.js
│   │   ├── vendors/
│   │   │   └── jquery.js
│   │   └── views/
│   │       ├── index.html
│   │       └── style.css
│   └── app.js
├── node_modules/
│   ├── express/
│   ├── jquery/
│   ├── body-parser/
│   └── ...
└── .gitignore
```

## AJAX POST Request
- index.html (FE)
 - form is submitted
- client.js (client)
 - Create object with form data
 - jQuery (start POST AJAX request)
- app.js (server)
 - Route the request `/newProduct`
 - Adds the object to the products array
 - Return a response (200 status)
- client.js (client)
 - Runs the success function

**Example POST Request:**
```JavaScript
$.ajax({
  type: 'POST',
  url: '/newProduct',
  data: {make: 'Geo', model: 'Tracker'},
  success: function(response) {
    console.log("SUCCESS!!!");
    // refresh products
  }
});
```
