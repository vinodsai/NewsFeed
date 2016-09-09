import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.methods({
  removeFeed: function(id) {
    News.remove(id);
  }
});
News.allow({
  remove: function (userId, doc) {
   return doc.owner === userId;
 },
});
Meteor.publish("feed", function () {
  return News.find();
});
Meteor.publish("profiles", function (id) {
  return Profiles.find({userId:id});
});
