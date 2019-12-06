import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "account.update"(userId, username, email, firstName, lastName) {
    check(userId, String);
    check(username, String);
    check(email, String);
    check(firstName, String);
    check(lastName, String);

    return Meteor.users.update(
      { _id: userId },
      {
        set: {
          username: username,
          "emails.0.address": email,
          "profile.firstName": firstName,
          "profile.lastName": lastName
        }
      }
    );
  },
  "account.all"() {
    return Meteor.users.find();
  }
});
