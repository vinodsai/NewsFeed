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
