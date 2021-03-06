Package.describe({
  name: 'lnmunhoz:autoform-markdown-editor',
  version: '1.0.4',
  summary: 'A github like markdown editor using autoform and perak:markdown',
  git: 'https://github.com/lnmunhoz/meteor-autoform-markdown-editor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating', 'reactive-var'], 'client');
  api.use(['perak:markdown@1.0.5', 'aldeed:autoform@5.4.1'], 'client');
  api.addFiles([
    'markdown.html',
    'jquery.selection.js',
    'markdown.js',
    'markdown.css'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lnmunhoz:autoform-markdown-editor');
});
