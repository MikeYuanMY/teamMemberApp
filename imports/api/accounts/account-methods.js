import { Meteor } from "meteor/meteor";

Meteor.methods({
  "account.update"(userId, username, email, firstName, lastName) {

    return Meteor.users.update(
      { _id: userId },
      {
        $set: {
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
