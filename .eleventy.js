module.exports = function(eleventyConfig) {
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
    input: 'site',
    layouts: '_layouts'
  };

  return {
    dir
  };
};
