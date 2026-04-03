# Ecommerce Product Recommender

This is a small learning project that demonstrates a simple ecommerce product recommendation web app, deployed on Netlify.  
It uses a static frontend with a serverless function that returns product recommendations from a JSON file.

🔗 Live demo: https://ecommerce-product-recommender.netlify.app/

## Features

- Simple ecommerce-style UI built with HTML, CSS, and JavaScript
- Recommender endpoint powered by a Netlify serverless function
- Recommendations served from a JSON file in the `data` folder
- Fully deployed and hosted on Netlify

## Tech Stack

- HTML, CSS, JavaScript
- Netlify for hosting
- Netlify Functions for the `/recommend` API
- JSON file for mock recommendation data

## Project Structure

- `index.html` – Main page for the web app  
- `style.css` – Basic styling for the UI  
- `main.js` – Frontend logic to call the recommendation API and update the page  
- `data/user_recos.json` – Sample recommendation data used by the function  
- `netlify/functions/` – Serverless function code (e.g., `recommend.js`)  
- `netlify.toml` – Netlify configuration for functions and build settings  

## How It Works

1. The user visits the site and interacts with the frontend (selects a user or triggers recommendations).  
2. `main.js` sends a request to the Netlify function endpoint (for example `/api/recommend`).  
3. The function reads `data/user_recos.json` and returns recommended products for the given user.  
4. The frontend displays the recommended items on the page.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. To quickly preview the static frontend, open `index.html` in a browser or use a simple HTTP server (like Live Server in VS Code).

3. To test Netlify Functions locally, you can use the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```
   Then open the local URL shown in the terminal.

## Project Purpose

This project is **just for learning purposes**.  
I used it to practice:
- Building a small frontend project
- Working with serverless functions and JSON data
- Deploying a full stack (frontend + function) app on Netlify

## Possible Future Improvements

- Better UI and responsive design  
- More realistic recommendation logic  
- User login and real product catalog
