import { Meteor } from "meteor/meteor";
import { Teams } from "../teams.js";

//console.log("Teams published");
Meteor.publish("teams", function() {
  return Teams.find();
});
