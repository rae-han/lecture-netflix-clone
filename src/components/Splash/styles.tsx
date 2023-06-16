import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SplashContainer = styled(motion.div)`
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: var(--c-yellow);
    border-bottom-color: var(--c-yellow);
    animation: spinner 0.8s ease infinite;
  }
`;
