Profiles = new Mongo.Collection('profiles');
Profiles.allow({
  insert: function(usedId, doc) {
    return true;
  }
});
ProfileSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function() {
      if(this.isInsert) {
        return Meteor.userId();
      } else if(this.isUpsert) {
        return {
          $setOnInsert: Meteor.userId()
        }
      } else {
        this.unset();
      }
    }
  },
  name: {
    type: String,
    label: 'Your Name'
  },
  desc: {
    type: String,
    label: 'About Yourself'
  }
});
Profiles.attachSchema( ProfileSchema );
