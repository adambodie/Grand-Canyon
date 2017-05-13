/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.s3= {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      accessKeyId: 'AKIAJXWXLABXGQWIN6JQ',
      secretAccessKey: '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',
      bucket: 'grand-canyon.bodiewebdesign.com',
      region: 'us-west-2'
  };
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV.s3= {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      accessKeyId: 'AKIAJXWXLABXGQWIN6JQ',
      secretAccessKey: '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',
      bucket: 'grand-canyon.bodiewebdesign.com',
      region: 'us-west-2'
  };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3= {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      accessKeyId: 'AKIAJXWXLABXGQWIN6JQ',
      secretAccessKey: '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',
      bucket: 'grand-canyon.bodiewebdesign.com',
      region: 'us-west-2'
  };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
