module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true)

  // Make browsersync play nice with turbolinks
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: (snippet, match) => snippet + match,
      },
    },
  })

  // Copy static assets
  eleventyConfig.addPassthroughCopy("site/assets")

  // Template configuration
  eleventyConfig.setTemplateFormats(["html", "md"])
  eleventyConfig.setLiquidOptions({ dynamicPartials: true })

  return {
    dir: {
      input: "site",
      output: "output",
      layouts: "_layouts",
    },
  }
}
