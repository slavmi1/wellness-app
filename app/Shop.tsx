import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, Modal, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from './components/Avatar';
import { useAvatar } from './contexts/AvatarContext';
import { useCoins } from './contexts/CoinsContext';
import { useLanguage } from './contexts/LanguageContext';
import { ClothingItem } from './types';

const ShopScreen = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [notEnoughCoinsItemId, setNotEnoughCoinsItemId] = useState<string | null>(null);
  const { t } = useLanguage();

  const { coins, spendCoins } = useCoins();
  const { outfit, inventory, purchaseItem, equipItem, unequipItem } = useAvatar();
  
  const shopItems: ClothingItem[] = [
    { id: '1', price: 20, image: require('../assets/images/Clothes/shirt-grey.png'), category: 'shirt', equipped: false },
    { id: '2', price: 35, image: require('../assets/images/Clothes/shirt-red.png'), category: 'shirt', equipped: false },
    { id: '3', price: 233, image: require('../assets/images/Clothes/shorts-blue.png'), category: 'shorts', equipped: false },
    { id: '4', price: 250, image: require('../assets/images/Clothes/shorts-brown.png'), category: 'shorts', equipped: false },
    { id: '5', price: 300, image: require('../assets/images/Clothes/shoes-sneakers.png'), category: 'lowShoes', equipped: false },
    { id: '6', price: 500, image: require('../assets/images/Clothes/shoes-boots.png'), category: 'highShoes', equipped: false },
    { id: '7', price: 99, image: require('../assets/images/Clothes/handband-blue.png'), category: 'handband', equipped: false },
    { id: '8', price: 200, image: require('../assets/images/Clothes/glasses.png'), category: 'accessory', equipped: false },
    { id: '9', price: 150, image: require('../assets/images/Clothes/face-winking.png'), category: 'face', equipped: false },
    { id: '10', price: 666, image: require('../assets/images/Clothes/face-confident.png'), category: 'face', equipped: false },
    { id: '11', price: 70, image: require('../assets/images/Clothes/hairstyle.png'), category: 'hairstyle', equipped: false },
    { id: '12', price: 50, image: require('../assets/images/Clothes/blush.png'), category: 'faceDetails', equipped: false }
  ];

  const handleItemPress = (item: ClothingItem) => {
    if (isPurchased(item.id)) {
      equipItem(item);
    } else {
      setSelectedItem(item);
      setModalVisible(true);
    }
  };

  const handleUnequip = (item: ClothingItem, e: any) => {
    e.stopPropagation();
    unequipItem(item.category);
  };

  const handlePurchase = () => {
    if (!selectedItem) return;
    
    if (coins >= selectedItem.price) {
      spendCoins(selectedItem.price);
      purchaseItem(selectedItem);
      equipItem(selectedItem);
      setModalVisible(false);
    } else {
      setNotEnoughCoinsItemId(selectedItem.id);
      setModalVisible(false);
      
      setTimeout(() => {
        setNotEnoughCoinsItemId(null);
      }, 2000);
    }
  };

  const isPurchased = (itemId: string) => inventory.some(item => item.id === itemId);
  const isEquipped = (itemId: string) => Object.values(outfit).some(item => item?.id === itemId);

  const renderItem = ({ item }: { item: ClothingItem }) => (
    <TouchableOpacity 
      style={[
        styles.itemContainer,
        isPurchased(item.id) && styles.purchasedItem,
        isEquipped(item.id) && styles.equippedItem
      ]}
      onPress={() => handleItemPress(item)}
    >
      {isEquipped(item.id) && (
        <Pressable 
          style={styles.unequipButton}
          onPress={(e) => handleUnequip(item, e)}
        >
          <Image 
            source={require('../assets/images/Shop_images/unequip_button.png')} 
            style={styles.unequipIcon}
          />
        </Pressable>
      )}
      
      {isEquipped(item.id) && (
        <View style={styles.equippedOverlay} />
      )}
      
      {notEnoughCoinsItemId === item.id && (
        <View style={styles.notEnoughOverlay}>
          <View style={styles.notEnoughMessage}>
            <Text style={styles.notEnoughText}>{t('notenoughmoney')}</Text>
          </View>
        </View>
      )}
      
      <Image 
        source={item.image} 
        style={styles.itemImage}
      />
      
      {!isPurchased(item.id) && (
        <View style={styles.priceContainer}>
          <Image source={require('../assets/images/coin_icon.png')} style={styles.coinIconList}/>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          {({ pressed }) => (
            <Image
              source={require('../assets/images/back_button.png')}
              style={[styles.backIcon, {opacity: pressed ? 0.8 : 1}]}
            />
          )}
        </Pressable>
        <View style={styles.coinsTable}>
          <Text style={styles.headerText}>{coins}</Text>
          <Image style={styles.coinIcon} source={require('../assets/images/coin_icon.png')}/>
        </View>
      </View>

      <ImageBackground 
        source={require('../assets/images/Shop_images/shop-background.png')} 
        style={styles.avatarContainer}
        resizeMode='contain'
      >
        <Avatar />
      </ImageBackground>

      <FlatList
        data={shopItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.itemsGrid}
        style={styles.itemsList}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{t('buy')}?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={handlePurchase}
              >
                <Image source={require('../assets/images/Shop_images/yes_button.png')} style={styles.yesIcon}/>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Image source={require('../assets/images/Shop_images/no_button.png')} style={styles.noIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 24 : 0
  },
  header: {
    height: 93,
    padding: 25,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 30,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIcon: {
    width: 22,
    height: 32
  },
  coinsTable: {
    width: 165,
    height: 68,
    borderRadius: 30,
    paddingLeft: 5,
    backgroundColor: '#5FBB62',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  coinIcon: {
    width: 33,
    height: 50,
    marginRight: 12 
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    letterSpacing: -1.5,
  },
  avatarContainer: {
    height: 395,
    alignItems: 'center',
  },
  itemsList: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#54AB57',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemsGrid: {
    padding: 10,
    backgroundColor: '#6EDB71',
  },
  itemContainer: {
    flex: 1,
    margin: 11,
    alignItems: 'center',
    backgroundColor: '#5FBB62',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#54AB57',
    maxWidth: '30%',
    height: 118,
    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Тень для Android
    elevation: 4
  },
  purchasedItem: {
    height: 85,
    justifyContent: 'center',
  },
  equippedItem: {
    position: 'relative',
    overflow: 'visible',
  },
  equippedOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 17,
  },
  notEnoughOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  notEnoughMessage: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 8,
  },
  notEnoughText: {
    color: '#fff',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 10,
    textAlign: 'center',
  },
  unequipButton: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F83A3A',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderWidth: 3,
    borderColor: '#D73131'
  },
  unequipIcon: {
    width: 10,
    height: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  coinIconList: {
    width: 23,
    height: 35
  },
  itemPrice: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 154,
    height: 93,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingTop: 11,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#E3E3E3',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    color: '#535353',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    width: 65,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  yesIcon: {
    width: 25,
    height: 19
  },
  noIcon: {
    width: 19.37,
    height: 19.37
  },
});

export default ShopScreen;