import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Teams } from "./teams.js";

Meteor.methods({
  "teams.insert"(name, desc) {
    return Teams.insert({
      name: name,
      desc: desc,
      members: [],
      createdAt: new Date()
    });
  },
  "member.insert"(teamId, memberId) {
    check(teamId, String);
    check(memberId, String);
    if (
      Teams.findOne({
        _id: teamId,
        members: { $in: [memberId] }
      })
    ) {
      const meteorError = new Meteor.Error(
        "Nice Try",
        "Member Already in the Team",
        "User is in the team already.... Duplicate is not allowed"
      );
      throw meteorError;
    }
    return Teams.update({ _id: teamId }, { $addToSet: { members: memberId } });
  },
  "member.findOne"(teamId, memberId) {
    check(teamId, String);
    check(memberId, String);
    console.log("member findOne");

    return Teams.findOne({
      _id: teamId,
      members: { $in: [memberId] }
    });
  }
});
