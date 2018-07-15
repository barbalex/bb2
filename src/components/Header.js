// @flow
import React from 'react'
import styled from 'styled-components'

import oceanImage from '../images/ocean.jpg'

const Container = styled.div`
  margin-top: 0;
  height: 150px;
  padding: 15px;
  &:before {
    content: ' ';
    background-image: url(${oceanImage});
    display: block;
    position: absolute;
    left: 0;
    top: 51px;
    width: 100%;
    height: 150px;
    z-index: -1;
    opacity: 1;
  }
`
const IntroTitle = styled.div`
  margin-top: 15px;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 3px black, -2px -2px 3px black, 2px -2px 3px black,
    -2px 2px 3px black;
`
const IntroText = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  line-height: 38px;
  color: #fff;
  text-shadow: 2px 2px 3px black, -2px -2px 3px black, 2px -2px 3px black,
    -2px 2px 3px black;
`

const Header = () => (
  <Container>
    <IntroTitle>mediterranean migration</IntroTitle>
    <IntroText>blue borders</IntroText>
  </Container>
)

Header.displayName = 'Header'

export default Header
