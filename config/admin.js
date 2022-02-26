module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fe49cdefd4dceebb71245274c597ecfa'),
  },
});
