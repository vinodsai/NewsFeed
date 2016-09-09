Template.userposts.helpers({
  userpost: function() {
    return News.find({userId:Meteor.userId()}, {sort: {createdAt: -1}});
  }
})
