import { Meteor } from "meteor/meteor";

import { Teams } from "./teams.js";

Meteor.methods({
  "teams.insert"(name, desc) {
    return Teams.insert({
      name: name,
      desc: desc,
      members: [],
      createdAt: new Date()
    });
  }
});
