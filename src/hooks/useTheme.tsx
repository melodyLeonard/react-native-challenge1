import React from 'react';
import Theme from '../global/index';

const ctx = React.createContext(Theme);

export const Provider = ({children}: any) => (
  <ctx.Provider value={Theme}>{children}</ctx.Provider>
);

export const useTheme = () => React.useContext(ctx);

export default useTheme;
