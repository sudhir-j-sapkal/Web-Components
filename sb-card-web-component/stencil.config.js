exports.config = {
  bundles: [
    {
      components: [
        'sbcard',
        'sbcard-header',
        'sbcard-content',
        'sbcard-bottom'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
