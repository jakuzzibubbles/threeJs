<img alt="" width="500" src="/public/demo1.gif" />

   ```bash
   npm create vite@latest
   ```



   ```bash
   npm install three
   ```



   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```



   ```bash
   npx tailwindcss init -p
   ```

### Step 3: Configure Tailwind CSS

1. Update your `tailwind.config.js` file to include your content paths:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

2. Add Tailwind directives to your `index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 4: Start the Development Server

1. Run the development server:

   ```bash
   npm run dev
   ```

