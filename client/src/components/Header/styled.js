import styled from "styled-components";

export const StyledHeader = styled.div`
  // Self
  // Position
  position: sticky;
  /* margin-top: -80px; */
  top: 0;
  // size
  height: 40px;
  width: 100%;
  // color
  
  background: ${({headerTrans}) => (
    headerTrans ? 'transparent' : 'black'
  )};
  color: white;
  // debug
  /* border-bottom: red 1px solid; */

  // Elements
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const Website = styled.div`

  // Self
  flex: 1;
  box-sizing: border-box;

  // Elements
  display: flex;
  align-items: center;
  justify-content: center;
`

export const User = styled.div`
  flex: 1;

  // Elements
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  // Self
  box-sizing: border-box;
  // height: 40px;

  // Elements
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Logo = styled.div`
  // Self
  flex: 1;

  // Elements
  & h1 {
    font-size: 15px;
  }
`

export const SiteItem = styled.div`
  // Self
  flex: 1;
  margin-left: 12%;

  // Elements
  & a {
    white-space: nowrap;
    text-decoration: none;
    font-size: 15px;
    color: grey;
  }

`