export type ClothingCategory = 'handband' | 'hairstyle' | 'face' | 'accessory' | 'faceDetails' | 'shirt' | 'shorts' | 'lowShoes' | 'highShoes';

export type ClothingItem = {
  id: string;
  price: number;
  image: any; // или string для URL
  category: ClothingCategory;
  equipped: boolean;
};

export type AvatarOutfit = {
  [key in ClothingCategory]: ClothingItem | null;
};

export type Person = {
  id: string;
  name: string;
  lvl: number;
  picture: any;
}

export type Achievement = {
  id: string;
  text: string;
  reward: number;
  done: boolean;
}