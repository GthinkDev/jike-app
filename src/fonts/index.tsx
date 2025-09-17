import { Poppins, Source_Code_Pro } from "next/font/google";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontSource = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export { fontPoppins, fontSource };
