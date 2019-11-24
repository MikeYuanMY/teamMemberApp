import { Teams } from "/imports/api/teams/teams.js";
import { Meteor } from "meteor/meteor";

import "./TeamDetails.html";

const users = Meteor.users.find({}, { fields: { _id: 1, profile: 1 } });

Template.TeamDetails.helpers({
  team: () => {
    const teamID = FlowRouter.getParam("id");

    return Teams.findOne({ _id: teamID });
  },
  users() {
    return Meteor.users.find();
  },
  fullName() {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  },

  teamMembers() {
    const teamID = FlowRouter.getParam("id");
    const team = Teams.findOne({ _id: teamID });

    if (team) {
      const members = team.members;
      const teamMembers = Meteor.users.find({ _id: { $in: members } });

      return teamMembers;
    }
    return;
  }
});

Template.TeamDetails.onRendered(() => {
  $(".select2-dropdown").select2();
});

Template.TeamDetails.onCreated(function() {
  //console.log("Teams templated created");
  const template = this;
  const teamID = FlowRouter.getParam("id");
  template.autorun(function() {
    template.subscribe("team", teamID);
    template.subscribe("users");
  });
});

Template.TeamDetails.events({
  "submit .addTeamMemberForm"(event) {
    event.preventDefault();

    const teamID = FlowRouter.getParam("id");

    const memberID = $("[name=userSelect]").val();

    console.log(teamID, memberID);

    //console.log(this.team);

    Meteor.call("member.findOne", teamID, memberID, error => {
      Meteor.call("member.insert", teamID, memberID, error => {
        if (error) {
          console.log(error);
          swal(error.error, error.reason, "error");
        } else
          swal({
            title: "Success!",
            text: "The member is in your team",
            timer: 2000,
            type: "success",
            showConfirmButton: false
          });
      });
    });
  }
});
