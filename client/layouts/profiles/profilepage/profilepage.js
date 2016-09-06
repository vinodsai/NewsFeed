Template.profilepage.rendered = function() {
  Meteor.subscribe('profiles', FlowRouter.getParam('id'));
}
