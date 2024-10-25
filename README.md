# Attributions

<a href="https://www.flaticon.com/free-stickers/paper" title="paper stickers">Paper stickers created by jocularityart - Flaticon</a>
<a href="https://www.flaticon.com/free-stickers/reminder" title="reminder stickers">Reminder stickers created by Stickers - Flaticon</a>

# Planning

## Wireframe

I have an mvp wireframe with the optional stretch goal addition of a global stickies timeline, that will allow user to see other users stickies and like or comment on these.

- ![OK So Wireframe]()

## Database

- My database is a one to many with users as the one and stickies as the many. My foreign key is the clerk_id.
- ![Database Schema]()

## Requirements

- Set up user sign-up and user login using Clerk.
  - This is now done, still need to customise the layout and check header. Still also having trouble getting the clerk id in the database
- Create and display an error page if the user visits a user profile that doesn’t exist.
  - not found and error pages created, need styling and change content to stuit stickies theme
- Use 1 or more Radix UI Primitive or something similar (e.g. use of another library to enhance UX).
  - Have installed Radix, having issues with Material UI as the version is no longer compatible with next and react updates.
- Enable users to create a user profile, and input profile information (such as a user biography) using a form.
  -Users now have a profile they can go to to post stickies. Still need to sort out my routes that it makes a bit more sense with the input of their info. Need a user input form for their biography.
- Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).
  - Need a user input biography page.
- Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

## Stretch Goals

- have a global timeline for all stickies
  - allow users to like and comment on stickies
- add a delete and update button for the user to be able to delete stickies on their own page
