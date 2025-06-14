import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ClothingItem, AvatarOutfit, ClothingCategory } from '../types';

type AvatarContextType = {
  outfit: AvatarOutfit;
  inventory: ClothingItem[];
  equipItem: (item: ClothingItem) => void;
  unequipItem: (category: ClothingCategory) => void; // Добавляем новую функцию
  purchaseItem: (item: ClothingItem) => void;
};

const defaultOutfit: AvatarOutfit = {
  handband: null,
  hairstyle: null,
  face: null,
  accessory: null,
  faceDetails: null,
  shirt: null,
  shorts: null,
  lowShoes: null,
  highShoes: null
};

const AvatarContext = createContext<AvatarContextType>({
  outfit: defaultOutfit,
  inventory: [],
  equipItem: () => {},
  unequipItem: () => {},
  purchaseItem: () => {},
});

type AvatarProviderProps = {
  children: ReactNode;
};

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
  const [outfit, setOutfit] = useState<AvatarOutfit>(defaultOutfit);
  const [inventory, setInventory] = useState<ClothingItem[]>([]);

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