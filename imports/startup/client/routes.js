import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// Import needed templates
import "../../ui/layouts/body/body.js";
import "../../ui/pages/home/home.js";
import "../../ui/pages/not-found/not-found.js";
import "../../ui/pages/login/login.js";
import "../../ui/pages/register/register.js";
// Set up all routes in the app

// register
FlowRouter.route("/register", {
  name: "register",
  action() {
    BlazeLayout.render("App_body", { main: "register" });
  }
});

// login page
FlowRouter.route("/login", {
  name: "login",
  action() {
    BlazeLayout.render("App_body", { main: "login" });
  }
});

FlowRouter.route("/", {
  name: "App.home",
  action() {
    BlazeLayout.render("App_body", { main: "App_home" });
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render("App_body", { main: "App_notFound" });
  }
};
