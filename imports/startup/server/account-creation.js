//import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
Accounts.onCreateUser(function(options, user) {
  console.log("Account OnCreated called");
  // Use provided profile in options, or create an empty object
  user.profile = options.profile || {};
  // Assigns first and last names to the newly created user object
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;
  // Returns the user object
  return user;
});

// allow access
Meteor.users.allow({
  update: function(userId, user) {
    return true;

    /**
     * Don't use `return true` in production!
     * You probably need something like this:
     * return Meteor.users.findOne(userId).profile.isAdmin;
     */
  }
});
