1. run the project:
   install dependencies: npm install
   run project locally: npm run dev (go in to localhost:3000)
   run tests: npm test

2. Architecture decisions:
   Data loading: Session data is stored locally in /lib/sessions.ts
   Filters, search, and agenda handled on the client:
   because it’s interactive - results update instantly without reloading the page, which would be necessary if it ran on the server
   agenda persistence: uses localStorage to save session IDs across reloads

3. Trade-offs or shortcuts I took due to time:
   minimal styling using CSS modules
   limited testing - didn't have time to write complex tests, so I kept it very simple

4. What I would improve with more time:
   I would put a search in agenda too.
   I would have the route /sessions -> navigate to / o show our home page of all sessions
   a navigation bar for agenda, session details.
   a back button in sesseion deails - to return to all sessions
   a proper backend - to fetch sessions dynamically
   user authentication to save agendas across devices
   add features - like share agenda with other users, see who plans on attending each session and etc.
