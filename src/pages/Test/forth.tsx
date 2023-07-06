import React, { useContext, useState } from 'react';

type ThemeMode = 'dark' | 'light';

export const MyContext = React.createContext<ThemeMode>('dark');

const ChildrenComponent = () => {
  const contextValue = useContext(MyContext);
  console.log(contextValue);

  return <div>{contextValue}</div>;
};

const ParentComponent = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  return (
    <MyContext.Provider value={theme}>
      <ChildrenComponent />
      <button onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}>Toggle Theme</button>
    </MyContext.Provider>
  );
};

export default ParentComponent;
