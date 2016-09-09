Template.individualuserpost.events({
  'click .btn':function(event) {
    event.preventDefault();
    Meteor.call('removeFeed', this._id);
  }
})
