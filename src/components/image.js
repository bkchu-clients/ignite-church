import React from "react"
import Img from "gatsby-image"
import images from "../queries/image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ name, alt, ...props }) => {
  const image = images().find(n => {
    return n.node.relativePath.includes(name)
  })
  console.log(image);
  if (!image) {
    return null
  }
  const imageSizes = image.node.childImageSharp.sizes
  return <Img {...props} alt={alt} sizes={imageSizes} />
}
export default Image
