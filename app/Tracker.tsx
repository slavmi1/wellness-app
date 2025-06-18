import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Accelerometer } from 'expo-sensors';
import { Subscription } from 'expo-sensors/build/DeviceSensor';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from './contexts/LanguageContext';

// Тип для данных акселерометра
type Acceleration = {
  x: number;
  y: number;
  z: number;
};

// Тип для записи истории
type HistoryRecord = {
  id: string;
  date: string;
  steps: number;
  distance: number;
  duration: string;
};

export default function PedometerApp() {
  const router = useRouter();
  const { t, language, distanceUnit } = useLanguage(); 

  const [isMeasuring, setIsMeasuring] = useState(false);
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [lastAcceleration, setLastAcceleration] = useState<Acceleration | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  
  // Средняя длина шага в метрах
  const stepLength = 0.7;

  // Загружаем историю при монтировании
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem('pedometerHistory');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Ошибка загрузки истории:', error);
    }
  };

  const saveHistory = async (newRecord: HistoryRecord) => {
    try {
      const updatedHistory = [newRecord, ...history];
      await AsyncStorage.setItem('pedometerHistory', JSON.stringify(updatedHistory));
      setHistory(updatedHistory);
    } catch (error) {
      console.error('Ошибка сохранения истории:', error);
    }
  };

  useEffect(() => {
    let subscription: Subscription | null = null;
    
    if (isMeasuring) {
      subscription = Accelerometer.addListener(accelerometerData => {
        const { x, y, z } = accelerometerData;
        
        if (lastAcceleration) {
          const deltaX = Math.abs(x - lastAcceleration.x);
          const deltaY = Math.abs(y - lastAcceleration.y);
          const deltaZ = Math.abs(z - lastAcceleration.z);
          
          const acceleration = deltaX + deltaY + deltaZ;
          
          if (acceleration > 1.2) {
            setSteps(prev => prev + 1);
            setDistance(prev => prev + stepLength);
          }
        }
        
        setLastAcceleration({ x, y, z });
      });
      
      Accelerometer.setUpdateInterval(100);
    }
    
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isMeasuring, lastAcceleration]);

  const startMeasuring = () => {
    setSteps(0);
    setDistance(0);
    setStartTime(new Date());
    setIsMeasuring(true);
  };

  const stopMeasuring = async () => {
    setIsMeasuring(false);
    
    if (startTime) {
      const endTime = new Date();
      const durationMs = endTime.getTime() - startTime.getTime();
      const durationStr = formatDuration(durationMs);
      
      const newRecord: HistoryRecord = {
        id: Date.now().toString(),
        date: endTime.toLocaleString(),
        steps,
        distance: parseFloat(distance.toFixed(2)),
        duration: durationStr,
      };
      
      await saveHistory(newRecord);
    }
  };

  const formatDuration = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    
    return `${hours > 0 ? hours + 'ч ' : ''}${minutes > 0 ? minutes + 'м ' : ''}${seconds}с`;
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem('pedometerHistory');
      setHistory([]);
    } catch (error) {
      console.error('Ошибка очистки истории:', error);
    }
  };

  const formatDistance = (meters: number) => {
    if (distanceUnit === 'km') {
      return `${(meters / 1000).toFixed(2)} ${t('kilometers')}`;
    } else if (distanceUnit === 'mi') {
      return `${(meters / 1609.34).toFixed(2)} ${t('miles')}`;
    }
    return `${meters.toFixed(2)} ${t('meters')}`;
  };

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
        <Pressable
          onPress={() => router.navigate('/Statistics')}
          style={styles.statsButton}
        >
          {({ pressed }) => (
            <Text style={[styles.text, {opacity: pressed ? 0.8 : 1}]}>{t('statistics')}</Text>
          )}
        </Pressable>
      </View>
      
      <View style={styles.dataContainer}>
        <Text style={[styles.text, { paddingBottom: 10 }]}>{t('steps')}: {steps}</Text>
        <Text style={[styles.text, { paddingBottom: 10 }]}>{t('distance')}: {formatDistance(distance)}</Text>
        <Text style={[styles.text, { paddingBottom: 10 }]}>{t('status')}: {isMeasuring ? t('measuring') : t('stopped')}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.startButton]} 
          onPress={startMeasuring}
          disabled={isMeasuring}
        >
          <Text style={styles.buttonText}>{t('start')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.stopButton]} 
          onPress={stopMeasuring}
          disabled={!isMeasuring}
        >
          <Text style={styles.buttonText}>{t('stop')}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.button, styles.clearButton]} 
        onPress={clearHistory}
        disabled={history.length === 0}
      >
        <Text style={styles.buttonText}>{t('clear_history')}</Text>
      </TouchableOpacity>

      <Text style={styles.historyTitle}>{t('measurement_history')}:</Text>
      
      {history.length > 0 ? (
        <FlatList
          style={styles.historyList}
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={[styles.historyText, {marginBottom: 5}]}>{t('steps')}: {item.steps}</Text>
              <Text style={[styles.historyText, {marginBottom: 5}]}>{t('distance')}: {formatDistance(item.distance)}</Text>
              <Text style={styles.historyText}>{t('duration')}: {item.duration}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.historyText}>{t('no_saved_measurements')}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 24 : 0
  },
  header: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  statsButton: {
    height: 66,
    borderWidth: 5,
    borderColor: '#E3E3E3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Ubuntu-Bold',
    color: '#535353',
    fontSize: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    width: 175,
    alignItems: 'center',
    elevation: 2,
  },
  startButton: {
    backgroundColor: '#6EDB71',
  },
  stopButton: {
    backgroundColor: '#F83A3A',
  },
  clearButton: {
    backgroundColor: '#B1B1B1',
    marginBottom: 20,
    width: '100%'
  },
  buttonText: {
    fontFamily: 'Ubuntu-Bold',
    color: 'white',
    fontSize: 30,
  },
  historyTitle: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    color: '#535353',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  historyList: {
    width: '100%',
  },
  historyItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  historyDate: {
    color: '#535353',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 22,
    marginBottom: 15,
  },
  historyText: {
    color: '#535353',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20
  },
});