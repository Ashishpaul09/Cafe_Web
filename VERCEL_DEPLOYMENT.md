# Vercel Deployment Guide

This guide will help you deploy your Cafe Web application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Database**: Set up a PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)

## Step 1: Prepare Your Database

1. Create a PostgreSQL database on your preferred provider:
   - **Neon** (recommended): https://neon.tech
   - **Supabase**: https://supabase.com
   - **Vercel Postgres**: Available in Vercel dashboard

2. Get your database connection string (it should look like):
   ```
   postgresql://username:password@host:port/database?sslmode=require
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Add environment variables (see Step 3)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

## Step 3: Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: Set to `production`

### Optional Variables (if using authentication):
- `SESSION_SECRET`: A random string for session encryption
- Any other API keys your application uses

### How to add environment variables:
1. Go to your project dashboard on Vercel
2. Click on "Settings" tab
3. Click on "Environment Variables"
4. Add each variable with its value
5. Make sure to select the appropriate environments (Production, Preview, Development)

## Step 4: Database Migration

After deployment, you'll need to run your database migrations:

1. Install Vercel CLI if you haven't already
2. Run migrations using Vercel CLI:
   ```bash
   vercel env pull .env.local
   npm run db:push
   ```

Or run migrations directly with your database URL:
```bash
DATABASE_URL="your_database_url_here" npm run db:push
```

## Step 5: Verify Deployment

1. Check that your site loads at the Vercel URL
2. Test API endpoints:
   - `https://your-app.vercel.app/api/health`
   - `https://your-app.vercel.app/api/contact` (POST)
   - `https://your-app.vercel.app/api/newsletter` (POST)

## Project Structure for Vercel

The project has been configured with:

- **Frontend**: React app built with Vite → deployed as static files
- **Backend**: Express.js API routes → deployed as serverless functions
- **Database**: PostgreSQL with Drizzle ORM

## Files Added/Modified for Vercel:

1. `vercel.json` - Vercel configuration
2. `api/index.js` - Serverless function for API routes
3. `.vercelignore` - Files to exclude from deployment
4. Updated `package.json` scripts

## Troubleshooting

### Common Issues:

1. **Database Connection Errors**:
   - Verify your `DATABASE_URL` is correct
   - Ensure your database allows connections from Vercel's IP ranges
   - Check if SSL is required (most cloud databases require it)

2. **API Routes Not Working**:
   - Check the Vercel function logs in your dashboard
   - Verify environment variables are set correctly
   - Ensure your API routes start with `/api/`

3. **Build Failures**:
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation passes locally

### Getting Help:

- Check Vercel documentation: https://vercel.com/docs
- View deployment logs in your Vercel dashboard
- Check the Functions tab for serverless function logs

## Custom Domain (Optional)

To use a custom domain:

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Continuous Deployment

Vercel automatically deploys when you push to your main branch. You can:

- Configure different branches for preview deployments
- Set up deployment protection for production
- Use Vercel's preview URLs for testing

Your application is now ready for production on Vercel! 🚀
