import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
 margin: 2rem auto;
 width: 100%;
     @media (max-width: 769px) {  
           display: none;
        }
`

export const SocialLinksList = styled.ul`
 align-items: center;
 display: flex;
 justify-content: center;
 gap: 16px;
 list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover{
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
 fill: #bbb;
  svg {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
  }
`