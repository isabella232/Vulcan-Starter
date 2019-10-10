Package.describe({
  name: 'example-customization'
});

Package.onUse(function (api) {

  api.use([
    'vulcan:core@=1.13.4',
    'example-forum@=1.13.4',

    'fourseven:scss@4.5.0',
  ]);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

  api.addAssets([
    'lib/server/emails/customNewPost.handlebars',
    'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});
