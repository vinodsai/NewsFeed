Template.profilelayout.helpers({
  profile: function() {
    console.log(FlowRouter.getParam('id'));
    return Profiles.findOne({ userId: FlowRouter.getParam('id') });
  }
});
