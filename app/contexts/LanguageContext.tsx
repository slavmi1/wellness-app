import React, { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'en';
type DistanceUnit = 'km' | 'm';

type TranslationKey = 
  | 'distance' | 'language' | 'username' | 'km' | 'm' | 'Русский' | 'English'
  | 'stats' | 'rating' | 'progress'
  | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
  | 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july'
  | 'august' | 'september' | 'october' | 'november' | 'december'
  | 'jan' | 'feb' | 'mar' | 'apr' | 'may_short' | 'jun' | 'jul'
  | 'aug' | 'sep' | 'oct' | 'nov' | 'dec' | 'sort_by' | 'date' | 'total_distance' | 'best_distance'
  | 'week' | 'month' | 'year' | 'time_for_running' | 'sign_and_start' | 'name' | 'date_of_birth' 
  | 'password' | 'repeat_password' | 'sign' | 'log_in' | 'welcome_back' | 'forgot_password';

interface LanguageContextType {
  language: Language;
  distanceUnit: DistanceUnit;
  toggleLanguage: () => void;
  toggleDistanceUnit: () => void;
  t: (key: TranslationKey) => string;
  getDayName: (dayIndex: number, short?: boolean) => string;
  getMonthName: (monthIndex: number, short?: boolean) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    distance: 'Расстояние',
    language: 'Язык',
    username: 'slavmi1',
    km: 'км',
    m: 'м',
    'Русский': 'Русский',
    'English': 'Английский',
    stats: 'Тренировка',
    rating: 'Рейтинг',
    progress: 'Достижения',
    sort_by: 'Сортировать по',
    date: 'Дата',
    total_distance: 'Общая дистанция',
    best_distance: 'Лучшая дистанция',
    week: 'Неделя',
    month: 'Месяц',
    year: 'Год',
    time_for_running: 'ВРЕМЯ БЕГАТЬ!',
    sign_and_start: 'Зарегистрируйся и начни бегать сегодня',
    name: 'Имя',
    date_of_birth: 'Дата рождения',
    password: 'Пароль',
    repeat_password: 'Повторите пароль',
    sign: 'Регистрация',
    log_in: 'Вход',
    welcome_back: 'С возвращением, герой',
    forgot_password: 'Забыли пароль?',
    
    // Полные названия дней недели
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
    
    // Сокращенные названия дней недели
    mon: 'Пн',
    tue: 'Вт',
    wed: 'Ср',
    thu: 'Чт',
    fri: 'Пт',
    sat: 'Сб',
    sun: 'Вс',
    
    // Полные названия месяцев
    january: 'Январь',
    february: 'Февраль',
    march: 'Март',
    april: 'Апрель',
    may: 'Май',
    june: 'Июнь',
    july: 'Июль',
    august: 'Август',
    september: 'Сентябрь',
    october: 'Октябрь',
    november: 'Ноябрь',
    december: 'Декабрь',
    
    // Сокращенные названия месяцев
    jan: 'Янв',
    feb: 'Фев',
    mar: 'Мар',
    apr: 'Апр',
    may_short: 'Май',
    jun: 'Июн',
    jul: 'Июл',
    aug: 'Авг',
    sep: 'Сен',
    oct: 'Окт',
    nov: 'Ноя',
    dec: 'Дек'
  },
  en: {
    distance: 'Distance',
    language: 'Language',
    username: 'slavmi1',
    km: 'km',
    m: 'm',
    'Русский': 'Russian',
    'English': 'English',
    stats: 'Stats',
    rating: 'Rating',
    progress: 'Progress',
    sort_by: 'Sort by',
    date: 'Date',
    total_distance: 'Total distance',
    best_distance: 'Best distance',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    time_for_running: 'TIME FOR RUNNING!',
    sign_and_start: 'Sign and start your journey today',
    name: 'Name',
    date_of_birth: 'Date of birth',
    password: 'Password',
    repeat_password: 'Repeat your password',
    sign: 'Sign',
    log_in: 'Log in',
    welcome_back: 'Welcome back, hero',
    forgot_password: 'Forgot password',
    
    // Full day names
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
    // Short day names
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
    
    // Full month names
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    
    // Short month names
    jan: 'Jan',
    feb: 'Feb',
    mar: 'Mar',
    apr: 'Apr',
    may_short: 'May',
    jun: 'Jun',
    jul: 'Jul',
    aug: 'Aug',
    sep: 'Sep',
    oct: 'Oct',
    nov: 'Nov',
    dec: 'Dec'
  },
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>('km');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const toggleDistanceUnit = () => {
    setDistanceUnit(prev => prev === 'km' ? 'm' : 'km');
  };

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  const getDayName = (dayIndex: number, short: boolean = false): string => {
    const days = short 
      ? ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
      : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    if (dayIndex >= 0 && dayIndex < days.length) {
      return t(days[dayIndex] as TranslationKey);
    }
    return '';
  };

  const getMonthName = (monthIndex: number, short: boolean = false): string => {
    const months = short
      ? ['jan', 'feb', 'mar', 'apr', 'may_short', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
      : ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    
    if (monthIndex >= 0 && monthIndex < months.length) {
      return t(months[monthIndex] as TranslationKey);
    }
    return '';
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      distanceUnit,
      toggleLanguage, 
      toggleDistanceUnit,
      t,
      getDayName,
      getMonthName
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};