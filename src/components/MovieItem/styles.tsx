import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MovieItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  .movie-image {
    aspect-ratio: 2/3;
    border-radius: 10px;
    transform: scale(1);

    &:hover {
      transform: scale(1.0625);
      transition: transform 0.25s;
    }
  }

  .movie-title {
    margin-top: 16px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
