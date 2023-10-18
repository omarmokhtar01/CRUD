# Documentation

### Example of .env File

### Database URI for MongoDB
DB_URI='mongodb://localhost:27017/books'
### Port number for the server
PORT=3000
### Environment (development, production, etc.)
NODE_ENV=development

This API provides CRUD operations for managing books.

### Create new book

- Method: POST
- Route: /api/v1/books

#### Request Body

| Field          | Type     | Description            |
| -------------- | -------- | ---------------------- |
| title          | String   | Title of the book      |
| author         | String   | Author of the book     |
| description    | String   | Description of the book|
| genre          | String   | Genre of the book      |
| publisher      | String   | Publisher of the book  |
| publishedDate  | Date     | Published date of the book  |
| pagesCount     | Number   | Number of pages in the book |
| price          | Number   | Price of the book          |

#### Response

- Status Code: 201 (Created)
- Body:

```json
{
  "message": "book created",
  "data": {
    "_id": "607e50e55060722db85c04db",
    "title": "Sample Book",
    "author": "John Doe",
    "description": "This is a sample book",
    "genre": "Fiction",
    "publisher": "ABC Publications",
    "publishedDate": "2021-04-20T00:00:00.000Z",
    "pagesCount": 200,
    "price": 29.99,
    "__v": 0
  }
}
```

### Get all books

- Method: GET
- Route: /api/v1/books

#### Response

- Status Code: 200 (OK)
- Body:

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "607e50e55060722db85c04db",
      "title": "Sample Book",
      "author": "John Doe",
      "description": "This is a sample book",
      "genre": "Fiction",
      "publisher": "ABC Publications",
      "publishedDate": "2021-04-20T00:00:00.000Z",
      "pagesCount": 200,
      "price": 29.99,
      "__v": 0
    },
    {
      "_id": "607e50e55060722db85c04dc",
      "title": "Another Book",
      "author": "Jane Smith",
      "description": "This is another book",
      "genre": "Non-fiction",
      "publisher": "XYZ Publications",
      "publishedDate": "2021-05-01T00:00:00.000Z",
      "pagesCount": 150,
      "price": 19.99,
      "__v": 0
    }
  ]
}
```

### Get single book by id

- Method: GET
- Route: /api/v1/books/:id

#### Response

- Status Code: 200 (OK)
- Body:

```json
{
  "success": true,
  "data": {
    "_id": "607e50e55060722db85c04db",
    "title": "Sample Book",
    "author": "John Doe",
    "description": "This is a sample book",
    "genre": "Fiction",
    "publisher": "ABC Publications",
    "publishedDate": "2021-04-20T00:00:00.000Z",
    "pagesCount": 200,
    "price": 29.99,
    "__v": 0
  }
}
```

### Update a book

- Method: PUT
- Route: /api/v1/books/:id

#### Request Body

| Field          | Type     | Description            |
| -------------- | -------- | ---------------------- |
| title          | String   | Title of the book      |
| author         | String   | Author of the book     |
| description    | String   | Description of the book|
| genre          | String   | Genre of the book      |
| publisher      | String   | Publisher of the book  |
| publishedDate  | Date     | Published date of the book  |
| pagesCount     | Number   | Number of pages in the book |
| price          | Number   | Price of the book          |

#### Response

- Status Code: 200 (OK)
- Body:

```json
{
  "success": true,
  "data": {
    "_id": "607e50e55060722db85c04db",
    "title": "Updated Book",
    "author": "John Doe",
    "description": "This is a sample book",
    "genre": "Fiction",
    "publisher": "ABC Publications",
    "publishedDate": "2021-04-20T00:00:00.000Z",
    "pagesCount": 200,
    "price": 29.99,
    "__v": 0
  }
}
```

### Delete a book

- Method: DELETE
- Route: /api/v1/books/:id

#### Response

- Status Code: 204 (No Content)
- Body:

```json
{
  "success": true,
  "message": "Deleted"
}
```