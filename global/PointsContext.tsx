import React from 'react';

type PointsContextProps = {
  we: number;
  setWe: React.Dispatch<React.SetStateAction<number>>;
  they: number;
  setThey: React.Dispatch<React.SetStateAction<number>>;
};

export const PointsContext = React.createContext<PointsContextProps | null>(
  null
);

export const UsePointsContext = () => {
  const context = React.useContext(PointsContext);
  if (!context) throw new Error('O useContext deve estar dentro do Provider');

  return context;
};

export const PointsContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [we, setWe] = React.useState(0);
  const [they, setThey] = React.useState(0);

  return (
    <PointsContext.Provider value={{ we, setWe, they, setThey }}>
      {children}
    </PointsContext.Provider>
  );
};
