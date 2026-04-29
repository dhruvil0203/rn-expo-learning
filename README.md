# Expo Router Demo App 🚀

A **React Native** application built with [Expo](https://expo.dev) and [Expo Router](https://docs.expo.dev/router/introduction/) to demonstrate **file-based routing** — including route groups, dynamic routes, catch-all routes, and authentication flows.

## ✨ Features

- **File-based routing** powered by Expo Router
- **Route groups** — `(root)` for main app screens, `(auth)` for authentication
- **Dynamic routes** — `/user/[user]`, `/products/[products]`
- **Catch-all routes** — `/docs/[...slug]` for deeply nested paths
- **Nested layouts** — shared UI via `_layout.tsx` at each level
- **Authentication screens** — Sign In & Sign Up with shared header/footer layout
- **Stack navigation** with hidden headers for a clean UI

## 📁 Project Structure

```
src/app/
├── _layout.tsx                    # Root layout (Stack navigator)
├── (auth)/                        # Auth route group
│   ├── _layout.tsx                # Auth layout (Slot with header/footer)
│   ├── sign-in.tsx                # Sign In screen
│   └── sign-up.tsx                # Sign Up screen
└── (root)/                        # Main app route group
    ├── _layout.tsx                # Root group layout (Stack navigator)
    ├── index.tsx                  # Home screen (/)
    ├── about.tsx                  # About page (/about)
    ├── contact.tsx                # Contact page (/contact)
    ├── [user].tsx                 # Dynamic user route (/user/:user)
    ├── overview/
    │   ├── index.tsx              # Overview page (/overview)
    │   └── user.tsx               # Overview user page (/overview/user)
    ├── products/
    │   └── [products].tsx         # Dynamic product route (/products/:products)
    └── user/
        └── [user].tsx             # User profile route (/user/:user)
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Expo** | ~55.0.17 | Development platform |
| **Expo Router** | ~55.0.13 | File-based routing |
| **React** | 19.2.0 | UI library |
| **React Native** | 0.83.6 | Cross-platform framework |
| **React Navigation** | 7.x | Navigation primitives |
| **React Native Reanimated** | 4.2.1 | Animations |
| **TypeScript** | ~5.9.2 | Type safety |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android Studio (for Android emulator) or Xcode (for iOS simulator)
- Or install [Expo Go](https://expo.dev/go) on your physical device

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/expo-router-demo.git
   cd expo-router-demo/my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Open the app** using one of:

   - 📱 Scan the QR code with [Expo Go](https://expo.dev/go) (Android/iOS)
   - 🤖 Press `a` to open in Android emulator
   - 🍎 Press `i` to open in iOS simulator
   - 🌐 Press `w` to open in web browser

## 📖 Routing Concepts Demonstrated

### Route Groups

Route groups `(root)` and `(auth)` organize screens without affecting the URL structure. Each group has its own `_layout.tsx` for shared UI.

### Dynamic Routes

- **`/user/123`** → `[user].tsx` captures `123` as a parameter
- **`/products/iphone`** → `[products].tsx` captures `iphone` as a parameter

### Catch-All Routes

- **`/docs/feature/intro/part1`** → `[...slug].tsx` captures the entire path as an array

### Nested Layouts

- The `(auth)` group uses a `Slot` layout with a shared Header and Footer
- The `(root)` group uses a `Stack` navigator with hidden headers

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Start | `npm start` | Start the Expo dev server |
| Android | `npm run android` | Start on Android |
| iOS | `npm run ios` | Start on iOS |
| Web | `npm run web` | Start on web |
| Lint | `npm run lint` | Run ESLint |
| Reset | `npm run reset-project` | Reset to a blank project |

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [React Navigation](https://reactnavigation.org/)
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
