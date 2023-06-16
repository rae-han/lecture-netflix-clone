import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Category as CategoryContainer } from './styles.tsx';
import { Category } from '../../typings/db.ts';

interface Props {
  item: Category;
}

const CategoryItem = ({ item }: Props) => {
  const isMathch = useMatch(item.key);

  return (
    <CategoryContainer key={item.key}>
      <Link to={`/${item.key}`}>
        <span className="title">{item.key.replace('-', ' ').toUpperCase()}</span>
        {isMathch ? <motion.span layoutId="category" className="underline"></motion.span> : null}
      </Link>
    </CategoryContainer>
  );
};

export default CategoryItem;
