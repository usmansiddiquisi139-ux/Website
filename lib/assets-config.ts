export const ASSET_CONFIG = {
  // Wallpaper settings
  wallpaper: {
    path: "/images/wallpaper-orange-black-gradient.jpg",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  // Logo settings
  logo: {
    path: "/images/design-mode/s-logo.png",
    width: 32,
    height: 32,
  },

  // Tool logos directory
  toolsDir: "/images/tools/",

  // Animation settings
  animations: {
    duration: {
      fast: "0.3s",
      normal: "0.6s",
      slow: "0.8s",
    },
    easing: {
      easeIn: "cubic-bezier(0.42, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.58, 1)",
      easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
    },
  },

  // Color palette
  colors: {
    primary: "#FF6B35", // Orange
    secondary: "#1A1A1A", // Black
    accent: "#FF4500", // Red-Orange
    white: "#FFFFFF",
    transparent: "transparent",
  },
}
