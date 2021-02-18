/****************
* Please read these instructions from start to finish!
*
* You will be implementing a dashboard that can view, filter, sort,
* and modify posts.
*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* Refer to the mockup below for a guide on how to do the layout for
* the dashboard:
*
* https://docs.google.com/drawings/d/1Fo8r9jvpBRAzc_8zj1F7pJdNlutLDb_vAqtui7jVgS0/edit?usp=sharing
*
* You can use your own styles, but the overall layout must fulfill
* the following requirements.
*
* Layout __requirements__:
* - there must be header bar with a title on the right side,
*   and two dropdowns on the left side for filtering and sorting
* - there must be a sidebar with a button to add new posts, and
*   display the number of posts and authors of posts
* - there must be a content area that displays the posts in a grid,
*   you can choose the dimensions of the grid
* - each post must have a button to delete the post and
*   edit the post body
* - when the user scrolls through the content area, the header bar and
*   sidebar should not move
* - there must be some kind of UI that allows the user to create a
*   new post and edit/delete current posts
*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* The data for the app is provided by this fake API:
* https://jsonplaceholder.typicode.com/
*
* You will only need these two resources: '/posts' and '/users'
*
* Data Interaction __requirements__:
* - initially display all the posts provided by the API
* - the user can sort the posts by Post Title (A-Z)
* - the user can sort the posts by the word count of Post Body (more
*   words to less words)
* - the user can filter the posts to only show posts by a certain user
* - the user can create a new post with a new title, new body,
*   and an existing user
* - the user can view how many posts are displayed, and how many
*   authors are displayed in the sidebar
*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* __Requirements__ for writing React code:
* - do not use class components, only use functional components
* - use hooks wherever possible
* - use multiple files and components to organize your code, do
*   not put all components in a single file
* - all API requests must have error handling
*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* Data considerations with the fake API:
*
* The '/posts' endpoint will always return the same data, so you
* cannot create a new post with a POST request, and then expect it
* to show up in the response for the '/posts' endpoint.
*
* You will only be able to use '/posts' and '/users' endpoints to
* hydrate your local state. Afterwards, for each request that
* modifies data, you must modify your local state accordingly.
*
* For example:
* - user creates a post
* - the app will send a POST request, which doesn't really do
*   anything because of the fake API
* - the app must add the new post to a local state, to be able to
*   display it on the page
*
*/
