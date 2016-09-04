News = new Mongo.Collection('news');
News.allow({
  insert: function(usedId, doc) {
    return true;
  }
});
NewsSchema = new SimpleSchema({
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
  title: {
    type: String,
    label: 'Title'
  },
  desc: {
    type: String,
    label: 'What Do You Want To Share ?'
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});
News.attachSchema( NewsSchema );
