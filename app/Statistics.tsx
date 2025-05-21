import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, Pressable, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { setNavigationBarColor } from './utils/navigationBar';
import { useRouter } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import { BarChart } from 'react-native-chart-kit';
import { useLanguage } from './utils/LanguageContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface RunStats {
  dateRange: string;
  totalDistance: number;
  bestDay: string;
  bestDistance: number;
}

const StatsScreen = () => {
  useEffect(() => {
    setNavigationBarColor('#E1E1E1');
  }, []);

  const { t, getDayName, getMonthName } = useLanguage();
  const router = useRouter();
  const [value, setValue] = useState('week');
  const [isFocus, setIsFocus] = useState(false);
  const [statsData, setStatsData] = useState<RunStats>({
    dateRange: `12 - 18 ${getMonthName(4)} 2025`,
    totalDistance: 20.1,
    bestDay: getDayName(5), // Пятница
    bestDistance: 8
  });

  const screenWidth = Dimensions.get('window').width;
  const insets = useSafeAreaInsets();

  // Локализованные данные для графиков
  const dataSets = {
    week: {
      labels: [
        getDayName(0, true), // Пн
        getDayName(1, true), // Вт
        getDayName(2, true), // Ср
        getDayName(3, true), // Чт
        getDayName(4, true), // Пт
        getDayName(5, true), // Сб
        getDayName(6, true)  // Вс
      ],
      datasets: [{ data: [5, 7, 4, 8, 6, 9, 10] }]
    },
    month: {
      labels: [
        t('week') + ' 1',
        t('week') + ' 2',
        t('week') + ' 3',
        t('week') + ' 4'
      ],
      datasets: [{ data: [25, 30, 28, 35] }]
    },
    year: {
      labels: [
        getMonthName(0, true), // Янв
        getMonthName(1, true), // Фев
        getMonthName(2, true), // Мар
        getMonthName(3, true), // Апр
        getMonthName(4, true), // Май
        getMonthName(5, true), // Июн
        getMonthName(6, true), // Июл
        getMonthName(7, true), // Авг
        getMonthName(8, true), // Сен
        getMonthName(9, true), // Окт
        getMonthName(10, true), // Ноя
        getMonthName(11, true)  // Дек
      ],
      datasets: [{ data: [100, 120, 110, 130, 140, 150, 160, 170, 160, 180, 175, 190] }]
    }
  };

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: () => '#6EDB71',
    labelColor: () => '#535353',
    propsForLabels: {
      fontSize: 12,
      fontFamily: 'Ubuntu-Bold'
    },
    barPercentage: 0.8,
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#E3E3E3',
      strokeDasharray: '0'
    },
    decimalPlaces: 0,
    fillShadowGradient: '#6EDB71',
    fillShadowGradientOpacity: 1
  };

  const data = [
    { label: t('week'), value: 'week' },
    { label: t('month'), value: 'month' },
    { label: t('year'), value: 'year' }
  ];

  const [chartData, setChartData] = useState(dataSets.week);

  const handleDropdownChange = (item: { value: string }) => {
    setValue(item.value);
    setIsFocus(false);
    setChartData(dataSets[item.value as keyof typeof dataSets]);
  };

  const chartWidth = Math.max(
    screenWidth * 0.9,
    chartData.labels.length * 50
  );

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setStatsData({
          ...data,
          bestDay: getDayName(new Date(data.bestDay).getDay())
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <StatusBar backgroundColor={'#E1E1E1'}/>
      <View style={styles.topHalf}>
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
          <Text style={styles.headerText}>{t('sort_by')}</Text>
          <View>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#54AB57' }]}
              selectedTextStyle={styles.headerText}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={handleDropdownChange}
              renderRightIcon={() => (
                <Image 
                  source={require('../assets/images/Stats/arrow_down.png')} 
                  style={[styles.arrow_down, isFocus && { transform: [{ rotate: '180deg' }] }]}
                />
              )}
              itemTextStyle={styles.headerText}
              activeColor='#E3E3E3'
              containerStyle={styles.dropdownListContainer}
              itemContainerStyle={styles.itemContainer}
              flatListProps={{
                contentContainerStyle: styles.listContentContainer
              }}
            />
          </View>
        </View>
        <View style={styles.chartContainer}>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{height: 250}}
            contentContainerStyle={styles.scrollContent}
          >
            <BarChart
              data={chartData}
              width={chartWidth}
              height={220}
              chartConfig={chartConfig}
              fromZero
              showBarTops={false}
              segments={6}
              yAxisLabel=""
              yAxisSuffix=""
              style={styles.chart}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomHalf}>
        <StatsDisplay data={statsData} />
      </View>
    </View>
  );
};

// Текст статичный, и не привязан к данным. Нужно редактировать
const StatsDisplay = ({ data }: { data: RunStats }) => {
  const { t } = useLanguage();
  
  return (
    <View>
      <View style={styles.statsItem}>
        <Text style={styles.statsText}>{t('date')}</Text>
        <Text style={styles.statsText}>{data.dateRange}</Text>
      </View>
      
      <View style={styles.statsItem}>
        <Text style={styles.statsText}>{t('total_distance')}</Text>
        <Text style={styles.statsText}>{data.totalDistance} {t('km')}</Text>
      </View>
      
      <View>
        <Text style={styles.statsText}>{t('best_distance')}</Text>
        <Text style={styles.statsText}>({data.bestDay})</Text>
        <Text style={styles.statsText}>{data.bestDistance} {t('km')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    topHalf: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        marginBottom: 0
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
    headerText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        lineHeight: 18,
        color: '#535353'
    },
    dropdown: {
        width: 137,
        height: 46,
        borderColor: '#E3E3E3',
        borderWidth: 5,
        borderRadius: 25,
        paddingHorizontal: 8,
    },
    arrow_down: {
        width: 27,
        height: 18,
    },
    itemContainer: {
        padding: 0,
        margin: 0,
    },
    dropdownListContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 5,
        paddingVertical: 0,
        overflow: 'hidden',
    },
      listContentContainer: {
        padding: 0,
    },
    chartContainer: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    chart: {
        marginTop: 20,
    },
    bottomHalf: {
        flex: 1,
        backgroundColor: '#6EDB71',
        borderWidth: 3,
        borderBottomWidth: 0,
        borderColor: '#54AB57',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0,
        color: '#fff'
    },
    statsItem: {
        marginBottom: 25,
    }
})

export default StatsScreen;