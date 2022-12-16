import React from 'react'
import { Layout, Gradient, RedDotBlur, DotsWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <Component />
      {/* <Gradient /> */}

      <DotsWrapper>
        <RedDotBlur color='yellow' />
        <RedDotBlur color='red' />
      </DotsWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
