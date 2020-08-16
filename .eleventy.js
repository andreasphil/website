module.exports = eleventyConfig => {
  // Make browsersync play nice with turbolinks
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: (snippet, match) => snippet + match
      }
    }
  })

  // Copy static assets
  eleventyConfig.addPassthroughCopy("site/static")

  // Template configuration
  eleventyConfig.setTemplateFormats(["html", "md"])
  eleventyConfig.setLiquidOptions({ dynamicPartials: true })

  // Paths
  const dir = { input: "site", output: "build" }

  return {
    dir
  }
}
