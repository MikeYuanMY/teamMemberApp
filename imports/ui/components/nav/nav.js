import "./nav.html";

import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/kadira:flow-router";

Template.nav.events({
  "click .logout": function(event, template) {
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go("/");
  }
});
