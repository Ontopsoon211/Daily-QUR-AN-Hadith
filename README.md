# Daily Qur'an and Hadith

An Islamic app built with Expo React Native, featuring daily Qur'an verses, authentic Hadith, prayer times, and a Tasbih counter.

## Features

- **Daily Qur'an Verse**: Displays a daily verse from the Qur'an with Arabic text and English translation.
- **Authentic Hadith**: Showcases authentic Hadith with narration and source.
- **Prayer Times**: Calculates and displays prayer times based on user's location (with permission) or defaults to Mecca.
- **Tasbih Counter**: A digital counter for dhikr with increment and reset functionality.
- **Dark/Light Mode**: Automatic theme switching based on system preferences.
- **Modern Islamic UI**: Clean design with Islamic color scheme (green and gold accents).
- **Bottom Tab Navigation**: Easy navigation between Home, Prayer Times, and Tasbih screens.

## Tech Stack

- **Expo**: React Native framework for easy development and deployment.
- **Expo Router**: File-based routing for navigation.
- **TypeScript**: Type-safe JavaScript.
- **Adhan Library**: For accurate Islamic prayer time calculations.
- **Expo Location**: For accessing user's location for prayer times.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on your device:
   - Scan the QR code with Expo Go app (iOS/Android).
   - Press `w` to open in web browser.
   - Press `a` for Android emulator.

## Build and Deployment

This project is configured for EAS Build:

- **Development Build**: `eas build --profile development`
- **Preview Build**: `eas build --profile preview`
- **Production Build**: `eas build --profile production`

## Project Structure

```
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab navigation layout
│   │   ├── index.tsx        # Home screen
│   │   ├── prayer.tsx       # Prayer times screen
│   │   └── tasbih.tsx       # Tasbih counter screen
│   └── _layout.tsx          # Root layout
├── components/
│   ├── DailyVerse.tsx       # Qur'an verse component
│   ├── HadithSection.tsx    # Hadith display component
│   ├── PrayerTimesCard.tsx  # Prayer times component
│   └── TasbihCounter.tsx    # Counter component
├── constants/
│   └── Colors.ts            # Theme colors
└── assets/                  # Images and icons
```

## Permissions

The app requests location permission to calculate accurate prayer times. If denied, it defaults to Mecca's prayer times.

## Contributing

Feel free to contribute by adding more features, improving the UI, or adding more Islamic content.