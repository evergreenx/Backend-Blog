module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '590ada93f7bde2ba5b5e3b47bfb34bc3'),
  },
});
