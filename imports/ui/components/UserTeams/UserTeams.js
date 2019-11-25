import "./UserTeams.html";
import { Teams } from "/imports/api/teams/teams.js";
// future component for User Select 2 for Team member
const users = Meteor.users.find({}, { fields: { _id: 1, profile: 1 } });

Template.UserTeams.onCreated(function() {
  //console.log("Teams templated created");
  const template = this;
  template.autorun(function() {
    template.subscribe("teams");
  });
});

Template.UserTeams.helpers({
  userTeams: function() {
    const userID = Meteor.userId();
    const userTeams = Teams.find({ members: userID });

    return userTeams.count() === 0 ? null : userTeams;
  }
});
