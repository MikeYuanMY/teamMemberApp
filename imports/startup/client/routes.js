import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { Meteor } from "meteor/meteor";

// Import needed templates
import "../../ui/pages/landing/landing.js";
import "../../ui/layouts/body/body.js";
import "../../ui/pages/home/home.js";
import "../../ui/pages/not-found/not-found.js";
import "../../ui/pages/login/Login.js";
import "../../ui/pages/register/Register.js";
import "../../ui/pages/personal/Personal.js";
import "../../ui/pages/teams/Teams.js";
import "../../ui/pages/teamDetails/TeamDetails.js";
// Set up all routes in the app

// register
FlowRouter.route("/register", {
  name: "register",
  action() {
    BlazeLayout.render("App_body", { main: "RegisterForm" });
  }
});

// login page
FlowRouter.route("/login", {
  name: "login",
  action() {
    BlazeLayout.render("App_body", { main: "LoginForm" });
  }
});

// personal page
FlowRouter.route("/personal", {
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        redirect("/");
      }
    }
  ],
  action() {
    BlazeLayout.render("App_body", { main: "Personal" });
  }
});

// teams page

FlowRouter.route("/teams", {
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        redirect("/");
      }
    }
  ],
  name: "team",
  action() {
    BlazeLayout.render("App_body", { main: "Teams" });
  }
});

FlowRouter.route("/teams/:id", {
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        redirect("/");
      }
    }
  ],
  name: "teamDetails",
  action() {
    BlazeLayout.render("App_body", { main: "TeamDetails" });
  }
});
// FlowRouter.route("/", {
//   name: "App.home",
//   action() {
//     BlazeLayout.render("App_body", { main: "App_home" });
//   }
// });

FlowRouter.route("/", {
  name: "landing",
  action() {
    BlazeLayout.render("App_body", { main: "App_home" });
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render("App_body", { main: "App_notFound" });
  }
};
