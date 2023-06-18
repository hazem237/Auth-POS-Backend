# POS Backend

Express.js-based web application for managing products, product categories, and unit of measures. Provides CRUD operations for each of them.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- npm

## Step 1: Clone the repository

Clone the repository to your local machine

## Step 2: Install Dependencies

Navigate to the project directory and run `npm install `

## Step 3: Start the App

Start the application by running `npm start`
The app will be running at http://localhost:5050.

# Usage

Access the application by visiting http://localhost:5050 in your web browser.
Use the provided API endpoints to manage products, product categories, and unit of measures.

# API Specifications

## Products

> #### Retrieve all products
>
> - Endpoint: `/products`
> - Method: GET
> - Description: Retrieves all products.
> - Response: Returns an array of product objects.

> #### Retrieve a specific product
>
> - Endpoint: `/products/:productId`
> - Method: GET
> - Description: Retrieves a specific product based on the provided productId.
> - Parameters:
>   - `productId` (number) - The ID of the product.
> - Response: Returns the product object if found, or an error message if not found.

> #### Create a new product
>
> - Endpoint: `/products`
> - Method: POST
> - Description: Creates a new product.
> - Request Body:
>   - `name` (string) - The name of the product.
>   - `code` (string) - The code of the product.
>   - `image` (optional, string) - The image URL of the product.
>   - `price` (number) - The price of the product.
>   - `categoryId` (number) - The ID of the product category.
>   - `unitId` (number) - The ID of the unit of measure.
> - Response: Returns the created product object if successful, or an error message if unsuccessful.

> #### Update a specific product
>
> - Endpoint: `/products/:productId`
> - Method: PUT
> - Description: Updates a specific product based on the provided productId.
> - Parameters:
>   - `productId` (number) - The ID of the product.
> - Request Body:
>   - `name` (string) - The updated name of the product.
>   - `code` (string) - The updated code of the product.
>   - `image` (optional, string) - The updated image URL of the product.
>   - `price` (number) - The updated price of the product.
>   - `categoryId` (number) - The updated ID of the product category.
>   - `unitId` (number) - The updated ID of the unit of measure.
> - Response: Returns the updated product object if successful, or an error message if unsuccessful.

> #### Delete a specific product
>
> - Endpoint: `/products/:productId`
> - Method: DELETE
> - Description: Deletes a specific product based on the provided productId.
> - Parameters:
>   - `productId` (number) - The ID of the product.
> - Response: Returns a success message if the product is deleted successfully, or an error message if not found.

## Product Categories

> #### Retrieve all categories
>
> - Endpoint: `/product-categories`
> - Method: GET
> - Description: Retrieves all product categories.
> - Response: Returns an array of product category objects.

> #### Retrieve a specific category
>
> - Endpoint: `/product-categories/:categoryId`
> - Method: GET
> - Description: Retrieves a specific product category based on the provided categoryId.
> - Parameters:
>   - `categoryId` (number) - The ID of the product category.
> - Response: Returns the product category object if found, or an error message if not found.

> #### Create a new category
>
> - Endpoint: `/product-categories`
> - Method: POST
> - Description: Creates a new product category.
> - Request Body:
>   - `categoryName` (string) - The name of the product category.
> - Response: Returns the created product category object if successful, or an error message if unsuccessful.

> #### Update a specific category
>
> - Endpoint: `/product-categories/:categoryId`
> - Method: PUT
> - Description: Updates a specific product category based on the provided categoryId.
> - Parameters:
>   - `categoryId` (number) - The ID of the product category.
> - Request Body:
>   - `categoryName` (string) - The updated name of the product category.
> - Response: Returns the updated product category object if successful, or an error message if unsuccessful.

> #### Delete a specific category
>
> - Endpoint: `/product-categories/:categoryId`
> - Method: DELETE
> - Description: Deletes a specific product category based on the provided categoryId.
> - Parameters:
>   - `categoryId` (number) - The ID of the product category.
> - Response: Returns a success message if the product category is deleted successfully, or an error message if not found.