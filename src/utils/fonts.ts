import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../src/fonts/poppins/light.ttf",
      weight: "300",
    },
    {
      path: "../../src/fonts/poppins/regular.ttf",
      weight: "400",
    },
    {
      path: "../../src/fonts/poppins/medium.ttf",
      weight: "500",
    },
    {
      path: "../../src/fonts/poppins/semibold.ttf",
      weight: "600",
    },
    {
      path: "../../src/fonts/poppins/bold.ttf",
      weight: "700",
    },
    {
      path: "../../src/fonts/poppins/extrabold.ttf",
      weight: "800",
    },
    {
      path: "../../src/fonts/poppins/black.ttf",
      weight: "900",
    },
  ],
  fallback: ["inter"],
  variable: "--font-poppins",
});
