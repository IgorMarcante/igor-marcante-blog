import React from "react"
 
import { FaHome as Home} from "react-icons/fa";
 import { FaSearch as Search} from "react-icons/fa";
 import { FaArrowUp as Arrow} from "react-icons/fa";
 import { FaRegLightbulb as Light} from "react-icons/fa";
 import { BsFillGrid3X3GapFill as Grid} from "react-icons/bs";

 import * as S from "./styled"
 
 const MenuBar = () => (
   <S.MenuBarWrapper>
     <S.MenuBarGroup>
       <S.MenuBarLink to="/" title="Voltar para Home">
         <S.MenuBarItem>
           <Home />
         </S.MenuBarItem>
       </S.MenuBarLink>
       <S.MenuBarLink to="/search/" title="Pesquisar">
         <S.MenuBarItem>
           <Search />
         </S.MenuBarItem>
       </S.MenuBarLink>
     </S.MenuBarGroup>
     <S.MenuBarGroup>
       <S.MenuBarItem title="Mudar o tema">
         <Light />
       </S.MenuBarItem>
       <S.MenuBarItem title="Mudar visualização">
         <Grid />
       </S.MenuBarItem>
       <S.MenuBarItem title="Ir para o Topo">
         <Arrow />
       </S.MenuBarItem>
     </S.MenuBarGroup>
   </S.MenuBarWrapper>
 )
 
 export default MenuBar