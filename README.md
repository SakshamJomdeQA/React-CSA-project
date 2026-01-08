# React Static Site with CRA

This is a static site built with Create React App demonstrating various routing patterns including basic routes, dynamic routes, and nested routes.

## 🚀 Features

- ✅ Basic routing (/, /about, /contact)
- ✅ Dynamic routes with URL parameters (/user/:id, /product/:id, /blog/:slug)
- ✅ Nested routes (/dashboard with child routes)
- ✅ Combined nested + dynamic routes (/categories/:name/items)
- ✅ 404 Not Found page
- ✅ TypeScript support
- ✅ Modern and responsive UI

## 📁 Project Structure

```
my-static-site/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.tsx              (Main page at /)
│   │   ├── About.tsx             (About page)
│   │   ├── Contact.tsx           (Contact page)
│   │   ├── User.tsx              (Dynamic route: /user/:userId)
│   │   ├── Product.tsx           (Dynamic route: /product/:productId)
│   │   ├── BlogPost.tsx          (Dynamic route: /blog/:slug)
│   │   ├── Dashboard.tsx         (Nested route parent)
│   │   ├── DashboardProfile.tsx  (Nested: /dashboard/profile)
│   │   ├── DashboardSettings.tsx (Nested: /dashboard/settings)
│   │   ├── DashboardAnalytics.tsx (Nested: /dashboard/analytics)
│   │   ├── Category.tsx          (Nested + Dynamic parent)
│   │   ├── CategoryItems.tsx     (Nested + Dynamic child)
│   │   ├── NotFound.tsx          (404 page)
│   │   └── Pages.css             (Styles for all pages)
│   ├── App.tsx                   (Main routing configuration)
│   ├── App.css
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the **`build/`** folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 📦 Output Directory

When you run `npm run build`, the production-ready static files will be generated in:

```
my-static-site/build/
```

This `build/` directory contains:
- Optimized and minified JavaScript bundles
- CSS files
- HTML file(s)
- Static assets (images, fonts, etc.)
- Source maps

These files can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting
- etc.

## 🌐 Routes Overview

### Basic Routes:
- `/` - Home page with navigation links
- `/about` - About page
- `/contact` - Contact page

### Dynamic Routes:
- `/user/1` - User profile (userId: 1)
- `/product/laptop` - Product page (productId: laptop)
- `/blog/my-post-slug` - Blog post (slug: my-post-slug)

### Nested Routes:
- `/dashboard` - Dashboard main page
- `/dashboard/profile` - Profile section (nested)
- `/dashboard/settings` - Settings section (nested)
- `/dashboard/analytics` - Analytics section (nested)

### Combined (Nested + Dynamic):
- `/categories/electronics` - Category page (dynamic)
- `/categories/electronics/items` - Category items (nested + dynamic)

### Error Handling:
- `*` (any unmatched route) - 404 Not Found page

## 🎨 Styling

The project uses custom CSS with:
- Modern gradient background
- Responsive design
- Color-coded sections for different route types
- Smooth transitions and hover effects

## 🔧 Technologies Used

- React 18
- TypeScript
- React Router DOM v6
- Create React App
- CSS3

## 📝 Notes

- This project uses `BrowserRouter` for routing
- All routes are configured in `src/App.tsx`
- Dynamic parameters are accessed using `useParams()` hook
- Nested routes use the `<Outlet />` component
- The build output is optimized for production deployment

## 🚢 Deployment

After running `npm run build`, deploy the contents of the `build/` folder to your hosting provider.

Example for GitHub Pages:
```bash
npm run build
# Deploy the build/ folder
```

---

**Happy Coding! 🎉**
