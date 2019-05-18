module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk'])
  eleventyConfig.addPassthroughCopy('site/static')
  eleventyConfig.addPassthroughCopy('site/favicon.png')

  const dir = {
    input: 'site',
    layouts: '_layouts'
  }

  return {
    dir
  }
}
