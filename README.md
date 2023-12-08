# Discogs Test App
This is an app that requests your Github user authentication and then displays a list of links to your personal repositories. It leverages a Github App and Cloudflare Pages to provide authentication flow.

## Viewing
Visit https://discogs.pages.dev/ for the Github App authenicated flow.

## Decisions
1. Using Github GraphQL API - It was suggested to use this API, however I was unable to find a truly public Github API with no required authorization.
2. Implementing a Github App - Since the API was not public, instead of placing a hard-coded token or otherwise, I elected to stand up a Github app and implement a quick auth that happened as soon as the user entered, and simply store the Github access token in local storage (usually I would timebox the validity of the token, but this was quick and dirty).
3. Use of Cloudflare Pages and Page Functions - I saw the "bonus" and, perhaps inadvisably, decided to implement (for the first time) a variant of such for handling the authentication and storing of Github app secrets (which are stored in Cloudflare Pages as Environmental Variables) as well as the overall site flow using a `_worker.js` "Advanced Mode" worker. It is for this reason that I at time of writing realized that this could not be run locally given those secrets.
4. No tests -- ran out of time given my decision to implement this auth flow and learn Cloudflare Pages.

## Local development
Unfortunately at time of writing, this is not able to be run locally, due to the required Github app client requirements. In particular, the authorization requires a pre-specified Redirect URI, which is set to the above URL scheme. Attempting to run locally will require overriding the provided ENVs as well as reconfiguring the associated Github app to redirect properly.

It is possible to run this locally using `npm run build && npx wranger pages dev build`, however this will lead to the app attempting immediate user authorization and redirecting to a 404 page w/ undefined github app secret information.