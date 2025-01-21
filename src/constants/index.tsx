import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/clothes/image5.png";
import image6 from "../assets/clothes/image6.png";
import image7 from "../assets/clothes/image7.png";
import image8 from "../assets/clothes/image8.png";
import image9 from "../assets/clothes/image9.png";
import image10 from "../assets/clothes/image10.png";
import image11 from "../assets/clothes/image11.png";
import image12 from "../assets/clothes/image12.png";
import image13 from "../assets/clothes/image13.png";
import image14 from "../assets/clothes/image14.png";
import image15 from "../assets/clothes/image15.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image1,
    colors: ["#F3E5D7", "#000000"],
  },
  {
    id: 2,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image2,
    colors: ["#FFB6C1", "#0000FF"],
  },
  {
    id: 3,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image3,
    colors: ["#000000", "#808080"],
  },
  {
    id: 4,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image4,
    colors: ["#D2B48C", "#000000"],
  },
];

export const allProducts: Product[] = [
  ...products,
  {
    id: 5,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image5,
    colors: ["#A0522D", "#000000"],
  },
  {
    id: 6,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image6,
    colors: ["#8B4513", "#000000"],
  },
  {
    id: 7,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image7,
    colors: ["#4682B4", "#000000"],
  },
  {
    id: 8,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image8,
    colors: ["#D2691E", "#000000"],
  },
  {
    id: 9,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image9,
    colors: ["#708090", "#000000"],
  },
  {
    id: 10,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image10,
    colors: ["#8B0000", "#000000"],
  },
  {
    id: 11,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image11,
    colors: ["#556B2F", "#000000"],
  },
  {
    id: 12,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image12,
    colors: ["#DAA520", "#000000"],
  },
  {
    id: 13,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image13,
    colors: ["#2F4F4F", "#000000"],
  },
  {
    id: 14,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image14,
    colors: ["#800000", "#000000"],
  },
  {
    id: 15,
    name: "CUTWORK POPLIN DRESS",
    price: 9950.0,
    image: image15,
    colors: ["#8B008B", "#000000"],
  },
];

