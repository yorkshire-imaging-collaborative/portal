module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.page.fileSlug,
      title: (data) => data.title,
      parent: (data) => data.groups[0],
    },
    layout: () => "layouts/protocol.njk",
    tags: () => ["protocol"],
  },
};
