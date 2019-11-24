# TeamMemberApp
## About
Meteor App for team organization. 

This is a simple Meteor Application for demo purpose only. 

## APP URL 

You can access the heroku app from the following link 

[https://teammemberapp.herokuapp.com](https://teammemberapp.herokuapp.com)


## Instructions

### Running Locally
To run the app on your local:
1. Clone the project to your local machine. `git clone https://github.com/MikeYuanMY/teamMemberApp.git`

2. Start the Meteor in the teamMemberApp folder with the command `meteor`

Please make sure you have Meteor installed prior running the application locally. 
If you cannot start meteor application, run the following command `meteor reset` and try again 

### Application Workflow
1. The application will provide links for login or register
2. Once the user successfully register or login, the user will be directed to personal page 
3. User can edit user information on **Personal** page and can view list of the teams the user is in.
4. You can click on the list of the team to see Team Details or click on **Teams** link on navigation bar to see all the teams 
5. User can add name and description when create a New Team on **Teams** page
6. User can click on a team *block* to go to the Team Details page to *view* team members and *add* team member


## ToDo
- Code clean up and factorizing function 
- Breaking templates into re-usable components
- Provide ability to edit TeamDetails
- Provide ability to remove Team
- Provide ability to remove Team Member from Team
- Provide functionality to view other user profile
- Implement Ownership of the team 
- Implement SimpleSchema and AutoForm
- Fixing the icon rendering issue on Teams page


## Challenges

This is my first Meteor application. There was some initial learning curve.
* Publishing and Subscribing
* Making sure OneUI javascript will run correctly
* Layout management 
* Mongo db operation 