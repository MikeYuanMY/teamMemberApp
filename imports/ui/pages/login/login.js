import { FlowRouter } from "meteor/kadira:flow-router";
import { Meteor } from "meteor/meteor";
import { jQuery } from "meteor/jquery";
import { Template } from "meteor/templating";

import "./login.html";

//import "/public/assets/js/pages/base_pages_login.js";

Template.login.helpers({
  create: function() {},
  rendered: function() {
    $(".login").validate();
  },
  destroyed: function() {}
});

Template.login.events({
  "click #foo": function(event, template) {}
});
