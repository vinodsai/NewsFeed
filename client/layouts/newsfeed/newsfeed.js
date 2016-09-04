Template.newsfeed.helpers({
  news: function() {
    return News.find({}, {sort: {createdAt: -1}});

  }
})
