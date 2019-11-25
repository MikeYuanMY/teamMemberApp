Meteor.publish("userData", function() {
  var currentUser;
  currentUser = this.userId;
  if (currentUser) {
    return Meteor.users.find(
      {
        _id: currentUser
      },
      {
        fields: {
          // Default
          emails: 1,
          // Created profile property
          profile: 1
        }
      }
    );
  } else {
    return this.ready();
  }
});

Meteor.publish("users", function() {
  const users = Meteor.users.find({}, { fields: { _id: 1, profile: 1 } });

  //console.log(users);
  return users;
});
