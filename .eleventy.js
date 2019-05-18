module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(['html', 'md'])
  eleventyConfig.addPassthroughCopy('site/static')
  eleventyConfig.addPassthroughCopy('site/favicon.png')

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  })

  const dir = {
    input: 'site',
    layouts: '_layouts'
  }

  return {
    dir
  }
}
