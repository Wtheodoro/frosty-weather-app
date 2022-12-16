import React from 'react'
import { Layout, RedDotBlur, DotsWrapper, ComponentWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>

      <DotsWrapper>
        <RedDotBlur color='yellow' />
        <RedDotBlur color='blue' />
      </DotsWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
