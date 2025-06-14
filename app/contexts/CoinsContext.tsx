import { createContext, useState, useContext, ReactNode } from 'react';

// 1. Определяем тип контекста
type CoinsContextType = {
  coins: number;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => void;
};

// 2. Создаем контекст с явным указанием типа и начального значения
const CoinsContext = createContext<CoinsContextType>({
  coins: 0,
  addCoins: () => {},
  spendCoins: () => {},
});

// 3. Указываем тип для пропсов провайдера
type CoinsProviderProps = {
  children: ReactNode;
};

export const CoinsProvider = ({ children }: CoinsProviderProps) => {
  const [coins, setCoins] = useState(99999);

  const addCoins = (amount: number) => {
    setCoins(prev => prev + amount);
  };

  const spendCoins = (amount: number) => {
    setCoins(prev => (prev >= amount ? prev - amount : prev));
  };

  return (
    <CoinsContext.Provider value={{ coins, addCoins, spendCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};

// 4. Хук useCoins с явным указанием типа
export const useCoins = (): CoinsContextType => {
  const context = useContext(CoinsContext);
  if (!context) {
    throw new Error('useCoins must be used within a CoinsProvider');
  }
  return context;
};