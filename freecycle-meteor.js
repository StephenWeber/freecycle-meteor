if (Meteor.isClient) {

  Template.feed.helpers({
    posts: [
      { title: "This is post 1", link: "link" },
      { title: "This is post 2", link: "link" },
      { title: "This is post 3", link: "link" }
    ],
    userLocation: function() {
      if (Meteor.userId()) {
        userData = Meteor.users.findOne({'_id':currentUserId});
        return userData.userLocation;
      } else {
        return "National";
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
