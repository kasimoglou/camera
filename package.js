Package.describe({
    name: 'kasimoglou:camera',
    summary: 'Photos with one function call on desktop and mobile.',
    version: '1.4.1',
    git: 'https://github.com/kasimoglou/camera'
});

Cordova.depends({
    'cordova-plugin-camera': '4.0.3'
});

Package.onUse(function(api) {
    api.versionsFrom('1.7');

    api.use([
        'templating',
        'session',
        'ui',
        'blaze',
        'less@1.0.0||2.0.0',
        'reactive-var'
    ]);
    api.use('isobuild:cordova@5.2.0');

    api.addFiles('photo.html');
    api.addFiles('photo.js');
    api.addFiles('camera.less', ['web.browser']);
    api.addFiles('photo-browser.js', ['web.browser']);
    api.addFiles('photo-cordova.js', ['web.cordova']);

    api.export('MeteorCamera');
});
