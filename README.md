# Attributions

<a href="https://www.flaticon.com/free-stickers/reminder" title="reminder stickers">Reminder stickers created by Stickers - Flaticon</a>

# Planning

## Wireframe

I have an mvp wireframe with the optional stretch goal addition of a global stickies timeline, that will allow user to see other users stickies and like or comment on these.

- ![OK So Wireframe](./public/Screenshot%202024-10-25%20at%2009.09.36.png)
- ![OK So Wireframe- stretch ](./public/Screenshot%202024-10-25%20at%2009.09.43.png)

## Database

- My database is a one to many with users as the one and stickies as the many. My foreign key is the clerk_id.
- ![Database Schema](./public/Screenshot%202024-10-26%20at%2022.24.52.png)

## Requirements

- Set up user sign-up and user login using Clerk.
  - This is now done, still need to customise the layout and check header. Still also having trouble getting the clerk id in the database, fixed this with an await auth()!
- Create and display an error page if the user visits a user profile that doesn’t exist.
  - not found and error pages created, need styling and change content to suit stickies theme. Used Daisy UI to style.
- Use 1 or more Radix UI Primitive or something similar (e.g. use of another library to enhance UX).
  - Have installed Radix, having issues with Material UI as the version is no longer compatible with next and react updates. Will give daisy ui a try. Daisy UI lovely to use seems to work mostly on local still need to deploy on vercel to double check. Used mostly Daisy UI to to syle elements. Having an issue with padding once deployed to render. Not sure what the issue is, have left as is. In local there is padding around the stickies but not in vercel.
- Enable users to create a user profile, and input profile information (such as a user biography) using a form.
  -Users are redirected to a create-profile page after sign-up. Their biography is then displayed on the user profile page, where they can post stickies.
- Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).
  - When the user inputs their biography details this goes to the database.
- Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.
  - Stickies are displayed on the users page and a revalidatePath rerenders the stickies.

## Stretch Goals

- have a global timeline for all stickies
  - All stickies are displayed on the homepage with the ability to click on the username to take the current user to that user's profile page, where they can see that users biography and stickies.Created a seperate route for [user-id] where the logged in user can see other users profiles.
- add a delete and update button for the user to be able to delete stickies on their own page

  - added condition that only logged in user can do this

  ## Issue

  Vercel deployment renders stickies in home page and user profile page without padding around the main container, forcing the stickies to the left and bottom. Not sure why this is, in local it works. No errors either ?
