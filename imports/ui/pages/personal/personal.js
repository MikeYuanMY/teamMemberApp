import "./personal.html";
import "../../components/PageHeader/PageHeader.js";
import "../../components/profile/Profile.js";





// future component for User Select 2 for Team member
const users = Meteor.users.find({}, { fields: { _id: 1, profile: 1 } });
Template.Users.onCreated(function() {
  console.log("Users Template created");
  const template = this;
  template.autorun(function() {
    template.subscribe("users");
  });
});

Template.Users.onRendered(() => {
  $(".select2-dropdown").select2();
});

Template.Users.helpers({
  users() {
    return Meteor.users.find();
  },
  fullName() {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  }
});
