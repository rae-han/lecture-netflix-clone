import styled from 'styled-components';

export const Category = styled.li`
  position: relative;
  padding: 10px;

  .title {
    font-size: 2rem;
    font-weight: bolder;

    &.act {
      color: red;
    }
  }
  .underline {
    position: absolute;
    border-bottom: 2px solid var(--c-yellow);
    right: 6px;
    bottom: 6px;
    left: 6px;
  }
`;
