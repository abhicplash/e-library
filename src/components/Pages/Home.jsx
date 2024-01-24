import React from 'react'
import Layout from '../Layout/Layout'
import Books from '../Layout/Books'
import Banner from '../Layout/Banner'

function Home() {
  return (
    <Layout>
      <Banner />
      <Books />
    </Layout>
  )
}

export default Home