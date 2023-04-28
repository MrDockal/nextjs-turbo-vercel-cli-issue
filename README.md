Issue:
## The lambda throws an error: _**Cannot find module 'next/dist/server/next-server.js'**_

## How to reproduce the bug
1. Clone the repo  https://github.com/MrDockal/nextjs-turbo-vercel-cli-issue
2. npx vercel build --token YOUR_VERCEL_TOKEN --cwd apps/web
3. npx vercel deploy --prebuilt --token YOUR_VERCEL_TOKEN --yes --cwd apps/web
4. Visit the `/lambda` page and you'll get 500. The root page `/` works

This project was generated using
> Turborepo starter with yarn
> This is an official starter Turborepo.
