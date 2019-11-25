import { FlowRouter } from "meteor/kadira:flow-router";
import { Meteor } from "meteor/meteor";
import { jQuery } from "meteor/jquery";
import { Template } from "meteor/templating";
import { $ } from "meteor/jquery";
import "./Login.html";

import "/public/assets/js/app.js";
//import "/public/assets/js/pages/base_pages_login.js";
if (Meteor.isClient) {
  Template.LoginForm.events({
    "submit form": function submitForm(event) {
      // Prevent default browser form submit

      event.preventDefault();
      const username = $("[name=loginUsername]").val();
      const password = $("[name=loginPassword]").val();

      Meteor.loginWithPassword(username, password, function(error) {
        if (error) {
          validator.showErrors({
            loginUsername: error.reason
          });
        } else {
          FlowRouter.go("/personal");
        }
      });
    },
    "click .login-facebook": function(e) {
      e.preventDefault();

      Meteor.loginWithFacebook(
        { requestPermissions: ["public_profile", "email"] },
        function(err) {
          if (err) {
            console.log("Handle errors here: ", err);
          } else {
            FlowRouter.go("/personal");
          }
        }
      );
    }
  });

  $.validator.setDefaults({
    rules: {
      loginUsername: {
        required: true,
        minlength: 6
      },
      loginPassword: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      loginUsername: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 3 characters"
      },
      loginPassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      }
    }
  });

  Template.LoginForm.onRendered(() => {
    const validator = $("#loginForm").validate({
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
      }
      // Handle form submit
      // submitHandler: function submitHandler(event) {
      //   const username = $("[name=loginUsername]").val();
      //   const password = $("[name=loginPassword]").val();

      //   Meteor.loginWithPassword(username, password, function(error) {
      //     if (error) {
      //       validator.showErrors({
      //         loginUsername: error.reason
      //       });
      //     } else {
      //       FlowRouter.go("/personal");
      //     }
      //   });
      // }
    });
  });
}
