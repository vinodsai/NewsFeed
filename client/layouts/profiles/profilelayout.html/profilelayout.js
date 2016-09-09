Template.profilelayout.helpers({
  profile: function() {
    return Profiles.findOne({ userId: FlowRouter.getParam('id') });
  }
});
