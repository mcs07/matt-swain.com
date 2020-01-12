const visit = require(`unist-util-visit`)

module.exports = ({markdownAST}) => {
  visit(markdownAST, `paragraph`, (node, index, parent) => {

    // Filter to paragraphs with a single child
    if (node.children.length !== 1) {
      return
    }

    // Require that child to be an image with an alt
    const img = node.children[0]
    if (img.type !== 'image' || !img.alt) {
      return
    }

    // Replace the paragraph with a figure element
    node.type = 'figure'
    node.data = { hName: 'figure' }

    // Copy any other attributes from img to figure
    if (img.data && img.data.hProperties) {
      node.data.hProperties = img.data.hProperties
    }

    // Add figcaption element using image alt text
    node.children.push({
      children: [{ type: 'text', value: img.alt }],
      data: { hName: 'figcaption' },
      type: 'figcaption'
    })

  })
}
