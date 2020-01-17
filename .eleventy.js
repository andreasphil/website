module.exports = function(eleventyConfig) {
  // Make browsersync play nice with turbolinks
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  });

  // Copy static assets
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('site/static');
  eleventyConfig.addPassthroughCopy('site/favicon.png');

  // Template configuration
  eleventyConfig.setTemplateFormats(['html', 'md']);
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  // Paths
  const dir = {
    input: 'site'
  };

  return {
    dir
  };
};
