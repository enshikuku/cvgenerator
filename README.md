To set up Node.js with Express using different files for different routes, you can follow these steps:

1. **Create Your Project:**
   Set up a new Node.js project using `npm init` and install Express using `npm install express`.

2. **Folder Structure:**
   Organize your project with a folder structure. Create a folder, say "routes," and within it, create separate files for different routes. For example, `userRoutes.js` and `productRoutes.js`.

3. **Express Router:**
   In each route file, use Express's Router to define the routes. Here's a basic example:

   ```javascript
   // userRoutes.js
   const express = require('express');
   const router = express.Router();

   router.get('/', (req, res) => {
     res.send('User Route');
   });

   module.exports = router;
   ```

   ```javascript
   // productRoutes.js
   const express = require('express');
   const router = express.Router();

   router.get('/', (req, res) => {
     res.send('Product Route');
   });

   module.exports = router;
   ```

4. **Main App File:**
   In your main app file (e.g., `app.js`), import and use these route files:

   ```javascript
   const express = require('express');
   const app = express();

   const userRoutes = require('./routes/userRoutes');
   const productRoutes = require('./routes/productRoutes');

   app.use('/users', userRoutes);
   app.use('/products', productRoutes);

   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

   In this example, requests to `/users` will be handled by the `userRoutes.js` file, and requests to `/products` will be handled by the `productRoutes.js` file.

5. **Run Your App:**
   Execute your app using `node app.js` (assuming your main file is named `app.js`).

This approach helps maintain a clean and modular codebase by separating routes into different files. Adjust the routes and logic within each route file based on your project's requirements.