# Space News App

This is a responsive News application built with **Next.js**, which uses **Mongoose** to interact with an **Atlas MongoDB** database. The app fetches space-related news from the [News API](https://newsapi.org/) twice a day via a **Vercel Cron Job** and stores the data in MongoDB for users to view the latest updates.

## Features

- **Responsive Design**: Fully responsive, optimized for various screen sizes.
- **MongoDB Integration**: Uses Mongoose to manage data and interact with an Atlas MongoDB database.
- **Automated News Fetching**: A Vercel Cron Job automatically pulls the latest news twice a day.
- **News API**: Fetches news related to space exploration and science.

## Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:Eavilesz/news.git
   cd news
   ```

2. **Install Dependencies**

   ```
   pnpm install
   ```

3. **Environment Variables**

   Create a **.env** file in the root directory and add the following variables:

   ```
   MONGODB_URL=your_mongodb_atlas_uri
   NEXT_PUBLIC_SEARCH_ENDPOINT=your_news_api_key
   ```

4. Run the Development Server

   ```
   pnpm dev
   ```

   Visit http://localhost:3000 in your browser to see the app in action.

## Running the Cron Job

The app uses Vercel's Cron Job to fetch news twice daily. Once deployed on Vercel, you can schedule the cron job in the Vercel Dashboard.

1. Navigate to your project in Vercel.
2. Go to Settings > Cron Jobs.
3. Set up a cron job to hit your API route every 12 hours.

## Tech Stack

- **Next.js:** Frontend and backend framework.
- **Mongoose:** For MongoDB object modeling.
- **Atlas MongoDB:** Cloud-hosted NoSQL database.
- **News API:** External API to fetch the latest news.
- **Vercel Cron Job:** Automates fetching new data.

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes. Any contributions are welcome!

---

This app is part of my professional portfolio. It highlights my ability to integrate backend and frontend technologies, manage databases, and automate data-fetching processes using cron jobs. For more projects, visit my [portfolio](https://eaviles-portfolio.vercel.app/en/portfolio).
