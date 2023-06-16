import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MovieListContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 60px;
  width: 100%;
  width: var(--max-width);
  margin: 40px auto;
  padding: 0 20px;
`;

export const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
