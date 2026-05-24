import { clerkMiddleware } from '@clerk/nextjs/server';

const clerkProxy = clerkMiddleware();

// Next.js 16 proxy convention: named `proxy` export (default kept for Clerk compat)
export const proxy = clerkProxy;
export default clerkProxy;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/(.*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};