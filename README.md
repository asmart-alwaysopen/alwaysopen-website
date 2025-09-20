# Always Open - React Application

This is the React version of the Always Open website, an AI-powered virtual front desk solution for small to medium-sized businesses.

## Features

- **24/7 Availability**: Never miss a customer inquiry, day or night
- **Natural Conversations**: AI that speaks human and builds trust
- **Multi-Platform Support**: Works with WhatsApp, Telegram, Voice, and more
- **No Missed Opportunities**: Convert every inquiry into business opportunities

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the react directory:
   ```bash
   cd react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── HowItWorks.js
│   │   ├── FeaturesGrid.js
│   │   ├── Testimonials.js
│   │   ├── FAQ.js
│   │   ├── CTARounded.js
│   │   └── Footer.js
│   ├── hooks/
│   │   └── useWaveAnimation.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── images/
│   └── (all image assets)
└── package.json
```

## Technologies Used

- React 18
- React Hooks
- CSS3 with custom properties
- Canvas API for wave animations
- Lottie for animations

## Browser Support

The app is compatible with all modern browsers that support React 18.

## License

This project is part of the Always Open product suite. 