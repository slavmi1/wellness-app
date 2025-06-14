import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ClothingItem, AvatarOutfit, ClothingCategory } from '../types';

type AvatarContextType = {
  outfit: AvatarOutfit;
  inventory: ClothingItem[];
  equipItem: (item: ClothingItem) => void;
  unequipItem: (category: ClothingCategory) => void;
  purchaseItem: (item: ClothingItem) => void;
};

// Предмет по умолчанию (winking face из магазина)
const defaultFace: ClothingItem = {
  id: '9',
  price: 150,
  image: require('../../assets/images/Clothes/face-winking.png'),
  category: 'face',
  equipped: true
};

// Начальный набор с face по умолчанию
const initialOutfit: AvatarOutfit = {
  handband: null,
  hairstyle: null,
  face: defaultFace, // Устанавливаем face по умолчанию
  accessory: null,
  faceDetails: null,
  shirt: null,
  shorts: null,
  lowShoes: null,
  highShoes: null
};

// Начальный инвентарь с предметом по умолчанию
const initialInventory: ClothingItem[] = [defaultFace];

const AvatarContext = createContext<AvatarContextType>({
  outfit: initialOutfit,
  inventory: initialInventory,
  equipItem: () => {},
  unequipItem: () => {},
  purchaseItem: () => {},
});

type AvatarProviderProps = {
  children: ReactNode;
};

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
  const [outfit, setOutfit] = useState<AvatarOutfit>(initialOutfit);
  const [inventory, setInventory] = useState<ClothingItem[]>(initialInventory);

  const equipItem = (item: ClothingItem) => {
    setOutfit(prev => ({
      ...prev,
      [item.category]: item
    }));
    
    setInventory(prev => 
      prev.map(invItem => 
        invItem.category === item.category 
          ? { ...invItem, equipped: invItem.id === item.id } 
          : invItem
      )
    );
  };

  const unequipItem = (category: ClothingCategory) => {
    setOutfit(prev => ({
      ...prev,
      [category]: null
    }));
    
    setInventory(prev => 
      prev.map(item => 
        item.category === category 
          ? { ...item, equipped: false } 
          : item
      )
    );
  };

  const purchaseItem = (item: ClothingItem) => {
    setInventory(prev => [...prev, { ...item, equipped: false }]);
  };

  return (
    <AvatarContext.Provider value={{ outfit, inventory, equipItem, unequipItem, purchaseItem }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};