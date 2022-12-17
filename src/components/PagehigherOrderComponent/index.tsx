import React from 'react'
import NavBar from '../NavBar'
import {
  Layout,
  RedDotBlur,
  DotsWrapper,
  ComponentWrapper,
  NavWrapper,
} from './styles'

const PagehigherOrderComponent =
  (Component: React.ComponentType, showNavBar?: boolean) => () => {
    return (
      <Layout>
        <ComponentWrapper increseLeftMargin={showNavBar}>
          <Component />
        </ComponentWrapper>

        <DotsWrapper>
          <RedDotBlur color='yellow' />
          <RedDotBlur color='blue' />
        </DotsWrapper>

        {showNavBar && (
          <NavWrapper>
            <NavBar />
          </NavWrapper>
        )}
      </Layout>
    )
  }

export default PagehigherOrderComponent
