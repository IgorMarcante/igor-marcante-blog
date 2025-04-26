import styled from 'styled-components'

export const PaginationWrapper = styled.section`
   align-items: center;
   border-top: 1px solid var(--borders);
   color: #8899a6;
   display: flex;
   padding: 1.5rem 3rem;
   justify-content: space-between;

     @media (max-width: 768px) {
      font-size: .8rem;
      padding: 1rem;
    }
 
   a {
     color: #8899a6;
     text-decoration: none;
     transition: color 0.5s;
 
     &:hover {
       color: #1fa1f2;
     }
   }
 `