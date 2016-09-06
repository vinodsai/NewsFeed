import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish("feed", function () {
  return News.find();
});
Meteor.publish("profiles", function (id) {
  return Profiles.find({userId:id});
});
