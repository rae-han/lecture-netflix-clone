import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MovieDetailContainer = styled(motion.div)<{ backgroundImage: string }>`
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .MovieDetail {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    border-radius: 10px;
    background-color: black;

    &__image {
      max-width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    &__image-gradient {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      position: absolute;
      top: 0;
      width: 100%;
      aspect-ratio: 1/1;
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

      & > button {
        position: relative;
        width: 39px;
        height: 39px;
        margin: 20px;
        border: 2px solid var(--c-yellow);
        border-radius: 50%;
        background-color: inherit;
        color: var(--c-yellow);

        //&:before,
        //&:after {
        //  content: '';
        //  position: absolute;
        //  width: 33px;
        //  border-top: 2px solid var(--c-yellow);
        //}
        //
        //&:before {
        //  transform: rotate(-45deg);
        //  top: 16px;
        //  left: 6px;
        //}
        //&:after {
        //  transform: rotate(45deg);
        //  top: 15px;
        //  left: 2px;
        //}
      }
    }

    &__title {
      position: absolute;
      left: 20px;
      font-size: 4rem;
      font-weight: bolder;
      transform: translate(0, -100%);
    }

    &__infomation {
      margin: 20px 0;
      padding: 0 20px;

      &-description {
        font-size: 2rem;
      }

      & > p {
        margin: 12px 0;

        &:not(:nth-of-type(1)) {
          margin: 2px 0;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
