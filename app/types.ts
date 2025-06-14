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