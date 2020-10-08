exports.createPages = async ({ actions, graphql, reporter }) => {

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
                slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { createPage } = actions
  const portfolioTemplate = require.resolve(`./src/templates/workTemplate.js`)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: portfolioTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

}
