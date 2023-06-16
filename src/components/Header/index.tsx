import React, { useEffect, useState } from 'react';

import { Categories, Nav } from './styles.tsx';
import CategoryItem from '../Category';
import { Category } from '../../typings/db.ts';

const categories: Category[] = [
  { id: 0, key: 'popular' },
  { id: 1, key: 'coming-soon' },
  { id: 2, key: 'now-playing' },
];

const Header = () => {
  return (
    <Nav>
      <Categories>
        {categories.map((category) => (
          <CategoryItem key={category.key} item={category} />
        ))}
      </Categories>
    </Nav>
  );
};

export default Header;
