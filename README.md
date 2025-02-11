# Weather App

A simple and interactive weather application built using React. This app provides real-time weather information for any city worldwide.

## Features

- Search for current weather by city name
- Display temperature, weather condition, and other key details
- Dynamic background based on weather condition
- User-friendly interface

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React
- CSS
- Axios (for API calls)

## API Integration

This application uses the [OpenWeather API](https://openweathermap.org/) to fetch weather data. Ensure you sign up and get an API key.

## Environment Variables

Create a `.env` file in the root directory and add your API key:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

## Contributing

1. Fork the project
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add Your Feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request
