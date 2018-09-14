exports.config = {
  bundles: [
    {
      components: [
        'sb-card',
        'sb-card-header',
        'sb-card-content',
        'sb-card-bottom'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
