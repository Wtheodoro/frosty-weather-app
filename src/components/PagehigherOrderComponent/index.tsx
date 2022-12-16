import React from 'react'
import { Layout, RedDotBlur, DotsWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <Component />
      {/* <Gradient /> */}

      <DotsWrapper>
        <RedDotBlur color='yellow' />
        <RedDotBlur color='blue' />
      </DotsWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
