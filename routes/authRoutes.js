const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google')); // there is code in request url like ?code=sdsfj39i4

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
  });

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session)
    res.send(req.user);
  });
};
