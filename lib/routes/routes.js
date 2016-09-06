FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('layout', { home: 'home' });
  }
});
FlowRouter.route('/newsform', {
  name: 'newsform',
  action() {
    BlazeLayout.render('newsform');
  }
});
FlowRouter.route('/profiledetails', {
  name: 'profiledetails',
  action() {
    BlazeLayout.render('profileform');
  }
});
FlowRouter.route('/profilepage/:id', {
  name: 'profilepage',
  action() {
    BlazeLayout.render('profilepage');
  }
});
