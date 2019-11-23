import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { Meteor } from "meteor/meteor";

// Import needed templates
import "../../ui/pages/landing/landing.js";
import "../../ui/layouts/body/body.js";
import "../../ui/pages/home/home.js";
import "../../ui/pages/not-found/not-found.js";
import "../../ui/pages/login/login.js";
import "../../ui/pages/register/register.js";
import "../../ui/pages/personal/personal.js";
import "../../ui/pages/teams/teams.js";
// Set up all routes in the app

// register
FlowRouter.route("/register", {
  // triggersEnter: [
  //   (context, redirect) => {
  //     if (!Meteor.userId()) {
  //       redirect("/");
  //     }
  //   }
  // ],
  name: "register",
  action() {
    BlazeLayout.render("App_body", { main: "register" });
  }
});

// login page
FlowRouter.route("/login", {
  // triggersEnter: [
  //   (context, redirect) => {
  //     if (!Meteor.userId()) {
  //       redirect("/");
  //     }
  //   }
  // ],
  name: "login",
  action() {
    BlazeLayout.render("App_body", { main: "login" });
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
    BlazeLayout.render("App_body", { main: "personal" });
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
