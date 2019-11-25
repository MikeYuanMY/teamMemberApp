ServiceConfiguration.configurations.remove({
  service: "facebook"
});

// ServiceConfiguration.configurations.insert({
//   service: "facebook",
//   // Test Site
//   //   appId: "667780920417718",
//   //   secret: "8c465fc18701aa28d75185f24fc8cf41"

//   // Production
//   appId: "1435298776618891",
//   secret: "3df06aa1aee60da3b3d22414d67e12c6"
// });
console.log(Meteor.absoluteUrl());
if (Meteor.absoluteUrl() == "http://localhost:3000/") {
  console.log("server on local host");
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    // Test Site
    appId: "667780920417718",
    secret: "8c465fc18701aa28d75185f24fc8cf41"
  });
} else {
  console.log("server on production");
  ServiceConfiguration.configurations.insert({
    service: "facebook",

    // Production
    appId: "1435298776618891",
    secret: "3df06aa1aee60da3b3d22414d67e12c6"
  });
}
