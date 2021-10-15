# **API-DEV**

This is my first api created with node using express.

- Data is generated using [faker](https://www.npmjs.com/package/faker)
- Api deployed using [heroku](https://warm-caverns-03782.herokuapp.com/)
- Data is validated using [Joi](https://joi.dev/api/)

**_Endpoints_**:

- [/api/v1/products](https://warm-caverns-03782.herokuapp.com/api/v1/products)
- [/api/v1/users](https://warm-caverns-03782.herokuapp.com/api/v1/users)
- [/api/v1/categories](https://warm-caverns-03782.herokuapp.com/api/v1/categories)

‎

# Methods:

- **GET**:
  - **_Get all_** ---> /api/v1/{endpoint}/
  - **_Get a specific_** ---> /api/v1/{endpoint}/id
- **POST / PUT / PATCH:**

  - **_Products_**:
    - name: String
    - price: Number
    - image: URL
  - **_Users_**:
    - name: String,
    - address: String,
    - phone: Number,
    - email: email
  - **_Categories_**:
    - name: String,
    - products: Number

- **DELETE**
  - **_Delete one_** ---> /api/v1/{endpoint}/id

‎

(o\_

// \\\
v _/ _
