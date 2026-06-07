# Artifact Mfg. — Website

Artisan concrete. Springboro, Ohio.

## Deploying to Vercel

### Option A — Vercel Dashboard (easiest)

1. Go to vercel.com and create a free account
2. Click "Add New Project"
3. Click "Upload" and drag this entire folder in
4. Set the following build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`
5. Click Deploy

That's it. Vercel builds and deploys automatically.

### Option B — Deploy a pre-built folder

If you already have a built `dist/public` folder:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel deploy --prebuilt dist/public`

### Option C — Via Netlify Drop (no account needed for testing)

1. Run `npm install` then `npm run build`
2. Drag the `dist/public` folder to netlify.com/drop

## Image Notes

All images live in `client/public/images/` and are referenced as `/images/filename.png` in the code. When built, Vite copies them automatically into the output folder.

## Contact

jason@artifactmfg.us
937.266.4123
artifactmfg.us
