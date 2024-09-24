# React + Vite

# E-Commerce Platform

## Introduction

This project is a simple e-commerce platform built with React. It fetches product data from a fake API and allows users to:

- View a list of products.
- Add products to a shopping cart.
- Increase or decrease product quantity in the cart.
- Remove products from the cart.
- View total price details including MRP, discount, platform fee, and shipping charges.
- Search for products by title.

---

## Features

- **Product Listing**: Displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/).
- **Search Functionality**: Users can search products by name using the search bar.
- **Add to Cart**: Users can add products to their cart and adjust the quantities.
- **Cart Management**: 
  - Increase or decrease the quantity of a product in the cart.
  - Remove products from the cart.
- **Price Calculation**: Automatically calculates total MRP, applies a fixed coupon discount, and adds platform and shipping fees.
- **Cart Dropdown**: A dropdown that displays all products in the cart and their quantities.

---

## Tech Stack

- **React**: Front-end framework.
- **Axios**: For fetching data from the fake API.
- **CSS**: For styling the application.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
