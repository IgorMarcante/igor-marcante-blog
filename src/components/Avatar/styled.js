import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const AvatarWrapper = styled(GatsbyImage)`
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;

      @media (max-width: 769px) {  
    height: 1.875rem;
    width: 1.875rem;
  }
`