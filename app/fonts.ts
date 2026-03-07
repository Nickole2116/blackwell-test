import localFont from "next/font/local"

export const rotis = localFont({
  src: [
    {
      path: "../fonts/ATRotisSemiSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ATRotisSemiSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  fallback: ["Arial", "Helvetica", "sans-serif"],
})