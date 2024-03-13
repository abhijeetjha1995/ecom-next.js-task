# MY-ECOMMERCE-APP
This is a simple e-commerce app built with Next.js, Redux, and other modern web technologies. The app allows users to browse and purchase products from a catalog.

## Directory Structure
The app follows a modular directory structure, with the following main directories:

* `src`: The root directory of the app.
    *  `app`: The directory that contains the main Next.js components and pages.
        *  `layout.js`: The main layout component that wraps all pages.
    *  `components`: The directory that contains all the reusable UI components.
        *  `ui`: The directory that contains the low-level UI components.
            *  `index.js`: The default export for the ui directory.
            *  `star-rating.jsx`: A component that displays a star rating.
            *  `ui-button.jsx`: A component that displays a button.
            *  `ui-input.jsx`: A component that displays an input field.
            *  `ui-select.jsx`: A component that displays a select field.
            *  `cart-drawer.jsx`: A component that displays a cart drawer.
            *  `header.jsx`: A component that displays the header of the app.
            *  `price-filter.jsx`: A component that displays a price filter.
        *  `product-item.jsx`: A component that displays a product item.
        *  `product-list.jsx`: A component that displays a list of product items.
        *  `ViewProduct.jsx`: A component that displays a single product.
        *  `pages`: The directory that contains the Next.js pages.
            *  `products`: The directory that contains the product-related pages.
            *  `index.js`: The default export for the products directory.
    *  `store`: The directory that contains the Redux store, Reducer and hooks.
        *  `cart.js`: The Redux slice for the cart.
        *  `hooks.js`: The custom Redux hooks.
    *  `styles`: The directory that contains the global styles.
    *  `utils`: The directory that contains the utility functions.
        *   `cart.js`: The utility functions for the cart to manage cart item.

### Getting Started
To get started with the app, follow these steps:

1.  Clone the repository.
2.  Install the dependencies with npm install.
3.  Start the development server with npm run dev.
4.  Open the app in your browser at http://localhost:3000.

## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License..

