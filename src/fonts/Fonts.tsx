import { Inter } from "next/font/google";
import {Comfortaa,Sarabun} from "next/font/google"

export const comforta = Sarabun({
  weight:["100","200","300","400","500","600","700"],
  subsets:["latin"]
})
export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
