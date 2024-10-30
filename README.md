

# Recipe Menu

A React application that displays a menu of recipes with options to switch between Dark and Light modes. Each recipe card includes a title, an image, and a link to view the recipe source.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Demo](#demo)

---

## Features

- Toggle between Dark and Light modes.
- Display a list of recipes with dynamic content from a `data.json` file.
- Hover animations and gradients for a visually appealing interface.
- Responsive design for all screen sizes.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/recipe-menu.git
   cd recipe-menu
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm start
   ```

## Usage

1. The application opens in dark mode by default.
2. Use the toggle switch in the upper-right corner to switch between Dark and Light modes.
3. Hover over each recipe card to see animations.
4. Click the "View Recipe" button on each card to open the recipe source link in a new tab.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Custom Components**: Reusable components for UI consistency.
- **JSON Data**: Dynamic recipe content sourced from a `data.json` file.

## File Structure

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── card.js
│   │   │   ├── switch.js
│   │   │   ├── label.js
│   │   │   └── button.js
│   ├── data.json
│   ├── Demo.js
│   └── index.js
└── package.json
```

## Demo

Check out the live demo here: [Recipe Menu Demo](https://reciepe-cards.onrender.com/)
