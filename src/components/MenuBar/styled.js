import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transitoion: 0.5s;
        @media (max-width: 769px) {  
          border-top: 1px solid var(--borders);
          bottom: 0;
          flex-direction: row;
          height: auto;
          padding: 0;
          position: fixed;
          width: 100%;
        }
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) { 
    flex-direction: row;
  }
`

export const MenuBarLink = styled(Link)`
  display: block;
  &.active {
     span {
       color: var(--highlight);
     }
   }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

   &.display {
     @media (max-width: 769px) {
      display: none;
     }
   }

  @media (min-width: 769px) {
    &:hover {
      color: var(--highlight);
    }
  }

  @media (max-width: 769px) {
    height: 3.2rem;
    padding: 0.9rem;
    position: relative;
    width: 3.2rem;
  }
`