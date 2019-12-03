import "./Profile.html";
import { Accounts } from "meteor/accounts-base";

Template.Profile.helpers({
  email() {
    if (Meteor.user()) return Meteor.user().emails[0].address;
  }
});

Template.Profile.events({
  "submit form": function updateUser(event, template) {
    event.preventDefault();
  }
});

$.validator.setDefaults({
  rules: {
    username: {
      required: true,
      minlength: 3
    },
    firstName: {
      required: true
    },
    lastName: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    username: {
      required: "Please enter a username",
      minlength: "Your username must consist of at least 3 characters"
    },
    firstName: {
      required: "Please enter your First Name"
    },
    lastName: {
      required: "Please enter your Last Name"
    },
    email: "Please enter a valid email address"
  }
});

Template.Profile.onRendered(() => {
  const validator = $("#updateProfileForm").validate({
    // Add classes to validation display
    errorClass: "help-block text-right animated fadeInDown",
    errorElement: "div",
    errorPlacement: function errorPlacement(error, e) {
      jQuery(e)
        .parents(".form-group > div")
        .append(error);
    },
    highlight: function highlight(e) {
      jQuery(e)
        .closest(".form-group")
        .removeClass("has-error")
        .addClass("has-error");
      jQuery(e)
        .closest(".help-block")
        .remove();
    },
    success: function success(e) {
      jQuery(e)
        .closest(".form-group")
        .removeClass("has-error");
      jQuery(e)
        .closest(".help-block")
        .remove();
    },
    // Handle form submit
    submitHandler: function submitHandler(e) {
      // Get value from form element
      const username = $("[name=username]").val();
      const email = $("[name=email]").val();
      const firstName = $("[name=firstName]").val();
      const lastName = $("[name=lastName]").val();

      // update user information

      const userId = Meteor.userId();

      Meteor.call(
        "account.update",
        userId,
        username,
        email,
        firstName,
        lastName,
        error => {
          if (error) {
            swal(error.error, error.reason, "error");
            //console.log(error.error, error.reason);
          } else
            swal({
              title: "Updated!",
              text: "Your profile has been updated.",
              timer: 1000,
              type: "success",
              showConfirmButton: false
            });
        }
      );
    }
  });
});
