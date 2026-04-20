# 🎮 E-Sports & Sports Tracker

A high-fidelity, highly interactive mobile application built with **React Native**, **Expo**, and **NativeWind**. Designed specifically for e-sports enthusiasts, this application delivers a premium, immersive dark-themed experience with live streaming capabilities, detailed match statistics, and an engaging community chat.

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## ✨ UI/UX Philosophy & Design System

The platform was built with a *UI/UX first* approach, focusing on retaining user engagement through visual hierarchy, contrast, and fluid feedback loops.

- **Vibrant Dark Mode**: Deep `#0a0a0e` canvas backgrounds paired with hyper-vibrant accent colors (`#3d61ff` & `#8b5cf6`) that allow data and interactive elements to jump off the screen.
- **Glassmorphism & Depth**: Overlay usage with translucent card backgrounds layered over deep gradients to offer a sense of modern depth and "glass" aesthetic.
- **Fluid Micro-Interactions**: Rounded iconography, crisp typography styles, and active states that deliver immediate feedback to user inputs.
- **Cognitive Load Reduction**: Complex tracking data is visualized via clean timeline components, intuitive bar charts, and categorized lists.

## 📱 Key Screens & Interactions

### 🏟️ Matches & Statistics Hub
- Real-time **Match Timelines** showcasing goals, fouls, and substitutions with dedicated iconography and team colors.
- Visually digestible **Possession & Shot Statistics** using dynamic progress bars.
- Dedicated spotlight sections for **Impact Players** accompanied by user avatars and summarized metadata.

### 🔴 Immersive Live Stream Integration 
- Edge-to-edge scalable video player frame seamlessly integrated with **Live Chat overlay**.
- Floating, interactive **Micro-reactions** (🔥, 👏, 🎮, 😱) overlay to heighten community engagement.
- High-contrast chat bubbles segregating VIPs, standard users, and streamers.

### 👤 User Profile & Customization
- Clean, grid-based dashboard presenting the underlying data logically.
- In-depth **Notification & Network configuration** using intuitive native Switch elements (e.g., Push settings, Live Scores, Data Saver).
- Custom **Pro-Tips** cards and stylized Favorite selections to create a personalized bond between the app and the user.

---

## 🛠️ Technology Stack

- **Framework**: [React Native](https://reactnative.dev/)
- **Toolchain**: [Expo v54](https://expo.dev/)
- **Styling**: [NativeWind v2](https://www.nativewind.dev/) (bringing the power of Tailwind CSS to React Native)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, type-safe components.
- **Navigation**: [React Navigation v7](https://reactnavigation.org/)
- **Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed along with optionally having [Expo Go](https://expo.dev/client) downloaded on your physical mobile device.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd esports-tracker
   ```

2. **Install all required dependencies**:
   ```bash
   npm install
   ```

3. **Start the Expo development server**:
   ```bash
   npx expo start
   ```

4. **Experience the app**:
   - Use the **Expo Go** app on your physical device and scan the QR code generated in your terminal or browser.
   - Alternatively, press `a` in the terminal to launch the Android emulator, or `i` to launch the iOS simulator.

---

## 🎨 Design System Variables (Tailwind Configuration)

The design system maintains strict compliance with our tailored color palettes:

- `primary`: `#3d61ff` (Electric Blue - Action priorities)
- `secondary`: `#2a2a35` (Accentuate secondary elements)
- `accent`: `#8b5cf6` (Purple - Highlights & Gamification)
- `background`: `#0a0a0e` (Deep Void - Canvas)
- `card`: `#12121a` (Elevated Surface)
- `live`: `#ef4444` (Vibrant Red - Stream connectivity)

---

*Designed and developed to elevate the spectator experience.*
