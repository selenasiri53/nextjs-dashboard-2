## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

Deployment:
Setup a vercel account, link to Github repo and deploy
Setup a Postgres DB at Storage > Select a DB > Postgres > Give a name, and select closest region (region will be set once selected, choose before setting up DB)
Copy & Paste secret key (reveal first) in .env (change .env.example to .env)

scripts/seed.js contains the instructions for first seeding customers, invoices, user, revenue tables

Seeding the Database:
scripts > seed.js contains all the initial set of data to start populating the app
uses bcrypt to hash the user's password
In package.json, add the command 'seed' - used by running in the terminal:
$ npm run seed

Created "users" table
Seeded 1 users
Created "customers" table
Seeded 10 customers
Created "invoices" table
Seeded 15 invoices
Created "revenue" table
Seeded 12 revenue

In vercel, query the data to see what's in placeholder-data.js

