import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p>Taken at Lake Minnewanka Scenic Drive, Alberta, Canada.</p>
      <StaticImage
        alt="Bighorn sheep"
        src="../images/bighorn-sheep.png"
      />
    </Layout>
  )
}

export default IndexPage