# Api Dev
Api built with Express.js, faker, joi and deployed in heroku. This api is based on an e-commerce and has different endpoints such as [products](https://warm-caverns-03782.herokuapp.com/api/v1/products), [users](https://warm-caverns-03782.herokuapp.com/api/v1/users) and [categories](https://warm-caverns-03782.herokuapp.com/api/v1/categories)

## Methods:
### GET:
-   **_Get all_**  ---> /api/v1/{endpoint}/
-   **_Get a specific_**  ---> /api/v1/{endpoint}/id
### POST / PUT / PATCH:
-   **_Products_**:
    -   name: String
    -   price: Number
    -   image: URL
-   **_Users_**:
    -   name: String,
    -   address: String,
    -   phone: Number,
    -   email: email
-   **_Categories_**:
    -   name: String,
    -   products: Number
### DELETE:
-   **_Delete one_**  ---> /api/v1/{endpoint}/id
## Process
### Built with:
- NodeJS
- ExpressJS
- Faker
- Joi
- Heroku


## Authors:
Made with 💜 by [emanuelalvaradog](https://github.com/emanuelalvaradog)
