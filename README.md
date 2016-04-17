Roomies: An app for roommates to turn their weekly "to-do" lists into a game!


Packages used:
-CSS loader and Style loader (for external stylesheet)
-React Bootstrap (for modals, tooltips, buttons and dropdowns)
-React Scrollbar (for adding scrollbars to components)
-Moment and React Datetime (for calendar on "Add a Task" menu)
-React FontAwesome (for using FontAwesome within React)


"Nice to Have" features to come later:
-Users can input a punishment or choose a random one that changes weekly
-Ability for more than two users
-Connect with social media (Facebook, Twitter, Snapchat)


Unsolved problems:
-Drag and drop capability in React


==========================


TODO:

#App logic and functionality: (Yulia)#
DONE:
[x] add a claim and unclaim buttons to todos
[x] create logic to mark task as complete
[x] create logic to mark the task that is complete as incomplete
[x] create logic to calculate number of points task is worth
[x] add time of completion
[x] create logic to return the task to the common field from roomies lists
[x] have lists refresh themselves when a task is added, deleted or edited
[x] create logic to assign a task to a roomie (FIX button delay)
[x] handle login/register information: get user input and send into a db collection of users (create user group and save users/roomies inside it)
[x] make data load for appropriate user
[x] prevent Registering with the same name

TODO:
[] save user's score into db (find user, get their score updated)
[] update score when the task is checked and when the task is unchecked
[] create logic for calculating weekly score and update the scoreboard
[] create logic for determining the winner  after one week is up
[] figure out date format with displaying tasks
[] figure out date format when editing tasks in a format
[] figure out how to add a user to an existing group
[] allow unclaim and check only for the user whose task it is
[] log who completed the task
[] replace roomie1 and roomie2 with names


* update points logic
* points if task has no deadline



#Styling#
* make welcome box a pop-up box
* make login box a pop-up box that appears instead of welcome box
* same for Just go in box
* make scoreboard box a pop-up box
* solve a problem with checked checkbox (somehow afer checking one todo the next one also becomes checked)
* make register form disappear on submit
