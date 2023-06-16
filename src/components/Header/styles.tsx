import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  z-index: 100;
  position: sticky;
  top: 0;
  height: 60px;
  margin-top: 20px;
  background-color: black;
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: var(--max-width);
  margin: 0 auto;
`;

// export const Nav = styled(motion.nav)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   background-color: black;
//   font-size: 14px;
//   padding: 20px 60px;
//   color: white;
// `;
//
// export const navVariants = {
//   top: {
//     backgroundColor: 'rgba(0, 0, 0, 0)',
//   },
//   scroll: {
//     backgroundColor: 'rgba(0, 0, 0, 1)',
//   },
// };
//
// export const Col = styled.div`
//   display: flex;
//   align-items: center;
// `;
//
// export const Logo = styled(motion.svg)`
//   margin-right: 50px;
//   width: 95px;
//   height: 25px;
//   fill: ${(props) => props.theme.red};
//   path {
//     stroke-width: 6px;
//     stroke: white;
//   }
// `;
//
// export const logoVariants = {
//   initial: {
//     fillOpacity: 1,
//   },
//   normal: {
//     fillOpacity: 1,
//   },
//   whileHover: {
//     fillOpacity: [0, 1, 0],
//     transition: {
//       repeat: Infinity,
//     },
//   },
// };
//
// export const Items = styled.ul`
//   display: flex;
//   align-items: center;
// `;
//
// export const Item = styled.li`
//   margin-right: 20px;
//   color: ${(props) => props.theme.white.darker};
//   transition: color 0.3s ease-in-out;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   &:hover {
//     color: ${(props) => props.theme.white.lighter};
//   }
// `;
//
// export const Circle = styled(motion.span)`
//   position: absolute;
//   width: 5px;
//   height: 5px;
//   border-radius: 5px;
//   bottom: -5px;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   background-color: ${(props) => props.theme.red};
// `;
//
// export const Search = styled.form`
//   display: flex;
//   align-items: center;
//   position: relative;
//   color: white;
//   svg {
//     height: 25px;
//   }
// `;
//
// export const Input = styled(motion.input)`
//   transform-origin: right center;
//   position: absolute;
//   right: 0px;
//   padding: 5px 10px;
//   padding-left: 40px;
//   z-index: -1;
//   color: white;
//   font-size: 16px;
//   background-color: transparent;
//   border: 1px solid ${(props) => props.theme.white.lighter};
// `;
