import { Teams } from "/imports/api/teams/teams.js";
import { Meteor } from "meteor/meteor";

import "./teams.html";

Template.Teams.onCreated(() => {
  //console.log("Teams templated created");

  Meteor.subscribe("teams");
});

Template.Teams.helpers({
  teams: function() {
    all = Teams.find({}).fetch();
    chunks = [];
    size = 4;
    while (all.length > 4) {
      chunks.push({ row: all.slice(0, 4) });
      all = all.slice(4);
    }
    chunks.push({ row: all });
    return chunks;
  },
  breakTimeReset: function() {
    Template.Teams.doCount = 0;
  },
  breakTime: function() {
    count = Template.Teams.doCount + 1;
    console.log(count);
    Template.Teams.doCount = count;

    if (count % 4 == 0) return "</div><!-- why? --><div class='row'>";
    else return "";
  }
});

Template.Teams.events({
  "submit .teamInsertForm"(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const desc = target.desc;

    Meteor.call("teams.insert", name.value, desc.value, error => {
      if (error) {
        swal(error.error, error.reason, "error");
      } else {
        swal({
          title: "Created!",
          text: "Your team has been created.",
          timer: 1000,
          type: "success",
          showConfirmButton: false
        });
        name.value = "";
        desc.value = "";
      }
    });
  }
});
