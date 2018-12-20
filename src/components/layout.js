import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from './header.js'
import PagNav from './pagnav.js'

export default ({ headerText, older, newer, children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            headerLinks
          }
        }
        sitePlugin (name:{eq:"gatsby-remark-photoset"}) {
          pluginOptions {
            maxWidth
          }
        }
      }
    `
    }
    render={data => (
    <div id="wrapper">
      <Header headerText={
        data.site.siteMetadata.title +
        (headerText ? ` - ${headerText}` : '') }
        width={data.sitePlugin.pluginOptions.maxWidth}
        description={data.site.siteMetadata.description}
        headerLinks={data.site.siteMetadata.headerLinks}
        />
      <div id="content">
        {children}
      </div>
      <PagNav
        newer={newer}
        older={older} />
    </div>
    )}
  />
)