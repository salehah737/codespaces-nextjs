# Deployment Guide for MatMoto-PomenPro

This document provides instructions for deploying the MatMoto-PomenPro application.

## GitHub Pages Deployment

The project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Prerequisites

- GitHub account with permissions to push to this repository
- Git installed on your local machine

### Automatic Deployment

1. Push your changes to the main branch:
   ```
   git push -u origin main
   ```

2. The GitHub Actions workflow will automatically build and deploy the application to GitHub Pages.

3. Once the workflow completes, your site will be available at:
   `https://salehah737.github.io/MatMoto-PomenPro/`

### Manual Deployment

If you need to deploy manually:

1. Build the application:
   ```
   npm run build
   ```

2. Export the static site:
   ```
   npm run export
   ```

3. The static site will be generated in the `out` directory.

4. You can deploy these files to any static hosting service.

## Environment Variables

The following environment variables can be configured:

- `NODE_ENV`: Set to `production` for production builds
- `NEXT_PUBLIC_API_URL`: API endpoint for backend services (if applicable)

## Vercel Deployment

To deploy to Vercel:

1. Connect your GitHub repository to Vercel
2. Configure the build settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `out`
   - Install Command: `npm install`

3. Deploy the application

## Troubleshooting

If you encounter issues during deployment:

1. Check the GitHub Actions logs for any build errors
2. Ensure all dependencies are properly installed
3. Verify that the Next.js configuration is correct
4. Check that the repository permissions are properly set up

For additional help, please open an issue on the GitHub repository.