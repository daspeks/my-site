import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial</p>
      <StaticImage
        alt="Bighorn sheep"
        src="../images/bighorn-sheep.png"
      />
    </Layout>
  )
}

export default IndexPage