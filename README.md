# Angular-demo-app

## Angular crud app using json server .

#### Create new app : ng new angular-demo-app
#### Run app : ng serve

## App configuration 
1 - Genrate components ,services , models :
>ng g c home


>ng g c products


>ng g c new-products

Service : 
> run ng g s services/product 

Models :
> ng g cl  models/product

2- Add routing 
Open app-routing.module.ts and then add this code 
>const routes: Routes = [
  {path : "home",component :HomeComponent},
  {path : "products",component :ProductsComponent},
  {path : "newProduct",component :NewProductComponent}
];

3 - Import usefull moduls :
add this moduls to app.module.ts
>ReactiveFormsModule 
FormsModule 
HttpClientModule 


## Style configuration 
1-  Run : npm i bootstrap bootstrap-icons 
2-  Update angular.json file by adding this code.
> "styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
]

Update styles.css 
>@import "~bootstrap-icons/font/bootstrap-icons.css";

## Backend configuration 
1 - Install json-server  : npm install -g json-server
2 - create data/db.json 
inside db.json add this code 
> {
  "products": [
    {
      "id": 1,
      "name": "Computer",
      "price": 5600,
      "checked": true
    }
  ]
}

3 - Run the backend server  : json-server -w data/db.json -p 8089
